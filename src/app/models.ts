export interface auth_v_model{
    token:string,
    plain:string,
    avatar:string
}

export interface viewed{
    name:string,
    token:any,
    redirect:string,
    thumnail:string,
    minute:number
}

export interface serie_cover{
    name:string,
    thumnail:string
    serie:any,
    views:number,
    gender:Array<string>,
    date:string, 
    dateMs:string,
    languages:Array<string>,
    seasons:number
}


export class Banner {
    constructor(
        public adClient: string,
        public adSlot: number,
        public adFormat: string,
        public fullWidthResponsive: boolean) {
            this.adClient = adClient;
            this.adSlot = adSlot;
            this.adFormat = adFormat || 'auto';
            this.fullWidthResponsive = fullWidthResponsive || true;
    }
}