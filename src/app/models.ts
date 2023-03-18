export interface auth_v_model{
    token:string,
    plain:string,
    avatar:string
}

// VIEWING
export interface viewing{
    name:string,
    redirect:string,
    thumnail:string,
    minute:string | number,
    token?:any
}

// SERIE
export interface serie{
    _id?: any,
    name?: string,
    description?: string,
    thumnail?: string,
    lenguages?: Array<language_serie>,
    date?: string,
    dateMs?: number,
    views?: number
}

export interface language_serie {
    id?: any,
    name?: string
}

// COVER
export interface serie_cover{
    _id?:string | number,
    name?:string,
    thumnail?:string,
    serie?:any,
    views?:number,
    gender?:Array<string>,
    date?:string, 
    dateMs?:string,
    languages?:Array<object>,
    seasons?:number
}

export interface get_cover_res{
    __typename?:string,
    name?:string,
    section:Array<serie_cover>
}

export function get_cover_comp(data:any){
    const des:Array<get_cover_res> = [];
    for (let x = 0; x < data.length; x++) {
        des.push({__typename:'empty', name:data[x].name, section:[]});
        for (let y = 0; y < data[x].section.length; y++) {
            des[x].section.push(data[x].section[y]);
        }
    }
    return des;
}

// LANGUAGE

export interface language {
    _id?: any,
    name?: string,
    seasons?: Array<seasons_language>,
    seasonsN?: number
}

export interface seasons_language {
    id?: string,
    number?: number
}

// SEASON

export interface seasons {
    _id?: any,
    name?: string,
    number?: number,
    chapters?: Array<chapters_seasons>
}

export interface chapters_seasons {
    id?: any,
    name?: string,
    duration?: string,
    thumnail?: string,
    number?: number
}

// CHAPTERS

export interface chapters {
    _id?: any,
    name?: string,
    number?: number,
    description?: string,
    secure_url?: string,
    thumnail?: string,
    duration?: string,
    season?: any,
    serie?: string
}

// ADS

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