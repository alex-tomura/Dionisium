import { gql } from "apollo-angular";

//get_cover query generator
export function get_cover(limit:number, data:any, type:Array<number>){
    return gql(`
        query MyQuery {
            get_cover(limit: ${limit}, type:[${type}]) {
                ${data}
            }
        }
    `);
}

//find with one value
export function FWOV(method:string ,value:{name:string, value:any}, data:any){
    return gql(`
        query MyQuery {
            ${method}(${value.name}: "${value.value}") {
                ${data}
            }
        }
    `)
}

//search query generator
export function get_search(chapters:number, series:number, search:string, data:any){
    return gql(`
        query MyQuery {
            search(chapters: ${chapters}, series: ${series}, search: "${search}") {
                ${data}
            }
        }
    `);
}