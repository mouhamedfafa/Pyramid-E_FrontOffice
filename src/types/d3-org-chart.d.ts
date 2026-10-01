// d3-org-chart ne fournit pas de typages : API fluide (chaque réglage renvoie le graphique).
declare module 'd3-org-chart' {
  export class OrgChart<T = any> {
    constructor();
    [reglage: string]: any;
    container(element: string | HTMLElement): this;
    data(donnees: T[]): this;
    svgHeight(hauteur: number): this;
    nodeId(fn: (d: T) => string): this;
    parentNodeId(fn: (d: T) => string | null): this;
    nodeWidth(fn: (d?: any) => number): this;
    nodeHeight(fn: (d?: any) => number): this;
    childrenMargin(fn: (d?: any) => number): this;
    compactMarginBetween(fn: (d?: any) => number): this;
    compactMarginPair(fn: (d?: any) => number): this;
    siblingsMargin(fn: (d?: any) => number): this;
    initialExpandLevel(niveau: number): this;
    nodeButtonWidth(fn: (d?: any) => number): this;
    nodeButtonHeight(fn: (d?: any) => number): this;
    nodeButtonX(fn: (d?: any) => number): this;
    nodeButtonY(fn: (d?: any) => number): this;
    buttonContent(fn: (params: { node: any; state: any }) => string): this;
    nodeContent(fn: (d: any, i?: number, arr?: any[], state?: any) => string): this;
    onNodeClick(fn: (noeud: any) => void): this;
    nodeUpdate(fn: (this: any, d: any, i: number, arr: any[]) => void): this;
    render(): this;
    fit(options?: { animate?: boolean; nodes?: unknown[]; scale?: boolean }): this;
    expandAll(): this;
    collapseAll(): this;
    setCentered(nodeId: string): this;
    setHighlighted(nodeId: string): this;
    clearHighlighting(): this;
    zoomIn(): void;
    zoomOut(): void;
    exportImg(options?: { full?: boolean; scale?: number; save?: boolean; backgroundColor?: string }): void;
    getChartState(): any;
  }
}
