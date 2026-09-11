import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../../shared/service/data/data.service';
import * as AOS from 'aos';
import { routes } from '../../../shared/service/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import SwiperCore from 'swiper'


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';



import {
	EffectCards,
	Mousewheel
  } from 'swiper/modules';

  SwiperCore.use([EffectCards, Mousewheel]);
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightgalleryModule } from 'lightgallery/angular';
import { SwiperModule } from 'ngx-swiper-wrapper';
interface data {
  active?: boolean;
  class?:string;
}

interface VideoAccueil {
  id?: number;
  entreprise_id?: number;
  accueil_url: string;
  accueil_type: 'url' | 'upload';
  est_actif?: boolean;
  file_name?: string;
  coverUrl?: string;
  safeUrl?: SafeResourceUrl;
  isEmbed?: boolean;
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule,FooterComponent,RouterLink,SlickCarouselModule,LightgalleryModule],
    encapsulation: ViewEncapsulation.None,
})




  // constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

 

export class HomeComponent implements OnInit {
  public routes = routes;
  videoAccueil: VideoAccueil | null = null;
  loading = true;
  isSelected:boolean[]=[false];
  constructor(private DataService: DataService, public router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {
  }
//   config: SwiperOptions = {
//     effect: 'cards',
//     loop: false,
//     grabCursor: true,
//     slidesPerView: 'auto',
//   };
  public bannercard=[
    {
      img:"course-22.jpg",
      img1:"assets/img/icons/course-01.svg",
      img2:"user-50.jpg",
      name:"David Benitz",
      department:"Productivity",
      description:"The Complete Business and Management Course",
      rating:"5.0 (210 Reviews)",
      price:"$168",
	  fav:0
    },
    {
      img:"course-25.jpg",
      img1:"assets/img/featured-courses/Clip-path-group.svg",
      img2:"user-20.jpg",
      name:"Edith Dorsey",
      department:"Lifestyles",
      description:"Build Creative Arts & media Course Completed",
      rating:"4.9 (178 Reviews)",
      price:"$190",
	  fav:6
    },
    {
      img:"course-24.jpg",
      img1:"assets/img/featured-courses/react.svg",
      img2:"user-23.jpg",
      name:"Calvin Johnsen",
      department:"Development",
      description:"Learn & Create ReactJS Tech Fundamentals Apps",
      rating:"5.0 (154 Reviews)",
      price:"$147",
	  fav:7
    },
  ]

  public slideConfig ={
    lazyLoad: 'ondemand',
				slidesToShow: 7,
				slidesToScroll: 1,
				autoplay: true,
				speed: 3000,
				autoplaySpeed: 1800,
				arrows: false,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
						slidesToShow: 6,
						infinite: true,
						dots: false
						}
					},
					{
						breakpoint: 1200,
						settings: {
						slidesToShow: 5,
						}
					},
					{
						breakpoint: 992,
						settings: {
						slidesToShow: 3,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						}
						}
				]
   }
  public topCourseSlider={
    infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      infinite: true,
      dots: false
    }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
    },
  ]
  }
public featureCourseSlider2 ={
  dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 768,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				  }
				]
}
public brandSlide={
  dots: false,
				infinite: true,
				speed: 2000,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 5,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 768,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1
					}
				  }
				]
}
public instructorSlider={
  infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScrol:1
          }
        }
        ]
}
public testimonialSlider={
  infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
					},
				]
}
  settings = {
       counter: false,
    plugins: [lgZoom, lgVideo] as any, 
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;

  };
  ngOnInit() {

    this.http.get<any>(`${environment.apiUrl}/help-center/accueil`).subscribe({
      next: (res) => {
        if (!res?.est_actif) {
          this.videoAccueil = null;
          this.loading = false;
          return;
        }
        const url = res?.accueil_url || '';
        const embedUrl = this.toEmbedUrl(url);
        const isEmbed = embedUrl !== null;

        this.videoAccueil = {
          ...res,
          accueil_url: url,
          accueil_type: res?.accueil_type || 'url',
          isEmbed,
          coverUrl: this.toCoverUrl(url),
          safeUrl: isEmbed ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl!) : null,
        };
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });

    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide: data) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
  iconSelect(index:number) : void{
	this.isSelected[index]=!this.isSelected[index]
  }
  onSubmit():void{
	this.router.navigate([routes.courseList]);
  }


  private toCoverUrl(url: string): string {
    if (!url) return 'assets/img/feature/feature-1.jpg';

    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (yt?.[1]) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;

    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo?.[1]) return `https://vumbnail.com/${vimeo[1]}.jpg`;

    const dm = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (dm?.[1]) return `https://www.dailymotion.com/thumbnail/video/${dm[1]}`;

    if (url.includes('/embed/') || url.includes('player.vimeo.com')) return 'assets/img/feature/feature-1.jpg';

    return 'assets/img/feature/feature-1.jpg';
  }

  private toEmbedUrl(url: string): string | null {
    if (!url) return null;

    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;

    // Vimeo: vimeo.com/ID
    match = url.match(/vimeo\.com\/(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;

    // Dailymotion
    match = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (match) return `https://www.dailymotion.com/embed/video/${match[1]}`;

    // Already an embed URL
    if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;

    // Uploaded file or unknown URL — use <video> tag
    return null;
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';

// interface Tutoriel {
//   id: number;
//   titre: string;
//   description: string;
//   video_url: string;
//   video_type: 'url' | 'upload';
//   safeUrl?: SafeResourceUrl;
//   isEmbed?: boolean;
// }

// @Component({
//   selector: 'app-tutoriels-video',
//   template: `
//     <div class="tuto-page">
//       <div class="tuto-header">
//         <h4><i class="isax isax-video-circle"></i> Tutoriels vid&eacute;o</h4>
//         <p class="tuto-sub">Apprenez &agrave; utiliser la plateforme gr&acirc;ce &agrave; nos vid&eacute;os guides.</p>
//       </div>

//       <div class="tuto-grid" *ngIf="tutoriels.length > 0">
//         <div class="tuto-card" *ngFor="let t of tutoriels">
//           <div class="tuto-video">
//             <iframe *ngIf="t.isEmbed" [src]="t.safeUrl" frameborder="0" allowfullscreen></iframe>
//             <video *ngIf="!t.isEmbed" [src]="t.video_url" controls preload="metadata"></video>
//           </div>
//           <div class="tuto-info">
//             <h5>{{ t.titre }}</h5>
//             <p>{{ t.description }}</p>
//           </div>
//         </div>
//       </div>

//       <div class="tuto-empty" *ngIf="tutoriels.length === 0 && !loading">
//         <i class="isax isax-video-circle"></i>
//         <p>Aucun tutoriel vid&eacute;o disponible pour le moment.</p>
//         <small>Le super administrateur peut ajouter des tutoriels depuis son espace.</small>
//       </div>

//       <div class="tuto-loading" *ngIf="loading">
//         <div class="spinner-border spinner-border-sm text-muted"></div>
//         <span>Chargement...</span>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .tuto-page { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
//     .tuto-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
//     .tuto-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
//     .tuto-header h4 i { font-size: 18px; color: #006F78; }
//     .tuto-sub { font-size: 13px; color: #6b7280; margin: 0; }
//     .tuto-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; padding: 20px 24px; }
//     .tuto-card { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; transition: box-shadow .15s; }
//     .tuto-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,.08); }
//     .tuto-video { position: relative; padding-top: 56.25%; background: #f3f4f6; }
//     .tuto-video iframe, .tuto-video video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; object-fit: cover; }
//     .tuto-info { padding: 14px 16px; }
//     .tuto-info h5 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
//     .tuto-info p { font-size: 12px; color: #6b7280; margin: 0; }
//     .tuto-empty { padding: 60px 24px; text-align: center; color: #9ca3af; }
//     .tuto-empty i { font-size: 48px; margin-bottom: 12px; display: block; }
//     .tuto-empty p { font-size: 14px; color: #6b7280; margin: 0 0 4px; }
//     .tuto-empty small { font-size: 12px; }
//     .tuto-loading { padding: 40px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; color: #6b7280; font-size: 13px; }
//   `],
//   imports: [CommonModule],
// })
// export class TutorielsVideoComponent implements OnInit {
//   tutoriels: Tutoriel[] = [];
//   loading = true;

//   constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

//   ngOnInit(): void {
//     this.http.get<any>(`${environment.apiUrl}/-center/tutoriels`).subscribe({
//       next: (res) => {
//         const items: any[] = res?.tutoriels || res?.data || [];
//         this.tutoriels = items.map(t => {
//           const embedUrl = this.toEmbedUrl(t.video_url);
//           const isEmbed = embedUrl !== null;
//           return {
//             ...t,
//             isEmbed,
//             safeUrl: isEmbed ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl!) : null,
//           };
//         });
//         this.loading = false;
//       },
//       error: () => { this.loading = false; }
//     });
//   }

//   private toEmbedUrl(url: string): string | null {
//     if (!url) return null;

//     // YouTube: youtube.com/watch?v=ID or youtu.be/ID
//     let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
//     if (match) return `https://www.youtube.com/embed/${match[1]}`;

//     // Vimeo: vimeo.com/ID
//     match = url.match(/vimeo\.com\/(\d+)/);
//     if (match) return `https://player.vimeo.com/video/${match[1]}`;

//     // Dailymotion
//     match = url.match(/dailymotion\.com\/video\/([\w]+)/);
//     if (match) return `https://www.dailymotion.com/embed/video/${match[1]}`;

//     // Already an embed URL
//     if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;

//     // Uploaded file or unknown URL — use <video> tag
//     return null;
//   }
// }
