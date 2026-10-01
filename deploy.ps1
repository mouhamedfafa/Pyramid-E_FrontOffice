# Deploiement du front Angular sur S3 + CloudFront.
# Usage :
#   .\deploy.ps1 -Bucket <nom-du-bucket> -DistributionId <ID-CloudFront> [-Configuration production] [-SkipBuild]
#
# Pourquoi ce script : les polices d'icones (.woff2) doivent etre uploadees avec le bon
# Content-Type. Sinon CloudFront renvoie index.html a la place et les icones s'affichent en carres.

param(
  [Parameter(Mandatory = $true)] [string] $Bucket,
  [Parameter(Mandatory = $true)] [string] $DistributionId,
  [string] $Configuration = "production",
  [switch] $SkipBuild
)

$ErrorActionPreference = "Stop"
$dist = Join-Path $PSScriptRoot "dist/template/browser"

if (-not $SkipBuild) {
  if (Test-Path $dist) { Remove-Item -Recurse -Force $dist }
  npx ng build --configuration $Configuration
  if ($LASTEXITCODE -ne 0) { throw "Build Angular en echec" }
}

$fonts = Get-ChildItem (Join-Path $dist "media") -Filter *.woff2 -ErrorAction SilentlyContinue
if (-not $fonts) { throw "Aucun .woff2 dans $dist/media : build incomplet" }

$s3 = "s3://$Bucket"
$longCache = "public,max-age=31536000,immutable"

# 1. Polices : Content-Type explicite (le mapping MIME de Windows ne connait pas toujours woff2)
aws s3 cp $dist $s3 --recursive --exclude "*" --include "*.woff2" --content-type "font/woff2" --cache-control $longCache
aws s3 cp $dist $s3 --recursive --exclude "*" --include "*.woff"  --content-type "font/woff"  --cache-control $longCache
aws s3 cp $dist $s3 --recursive --exclude "*" --include "*.ttf"   --content-type "font/ttf"   --cache-control $longCache
aws s3 cp $dist $s3 --recursive --exclude "*" --include "*.eot"   --content-type "application/vnd.ms-fontobject" --cache-control $longCache

# 2. Tout le reste (fichiers hashes -> cache long), sauf index.html
aws s3 sync $dist $s3 --exclude "index.html" --exclude "*.woff2" --exclude "*.woff" --exclude "*.ttf" --exclude "*.eot" --exclude "*.map" --cache-control $longCache
if ($LASTEXITCODE -ne 0) { throw "Upload S3 en echec" }

# 3. index.html en dernier, jamais mis en cache
aws s3 cp (Join-Path $dist "index.html") "$s3/index.html" --content-type "text/html; charset=utf-8" --cache-control "no-cache,no-store,must-revalidate"

# 4. Invalidation CloudFront (inclut les 404 deja mis en cache sur /media/*)
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/index.html" "/" "/media/*"

# 5. Verification : une police doit revenir en font/woff2, pas en text/html
$sample = $fonts[0].Name
Write-Host "Verifier : curl -I https://<domaine>/media/$sample  -> Content-Type attendu : font/woff2"
