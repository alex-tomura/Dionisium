import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get_cover_res, viewing, serie_cover } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  token:any = localStorage.getItem('token');
  viewing:Array<viewing> = [];
  popular:Array<serie_cover> | any = [];
  chargue_status:boolean = false;
  covers_list:Array<get_cover_res> = [];
  cover_selected:get_cover_res = {name:'', section:[{}]};
  limit:number = this.DefineLimit();

  constructor(private _service:SerieServiceService, private _route:Router) { }

  ngOnInit(): void {
    this.get_cover_gql('shonen', 'views', 0).subscribe((data:any)=>{
      this.cover_selected = data.data.get_covers_list;
      this.covers_list.push(this.cover_selected);
      this.chargue_status = true;
      let cl:number = Math.trunc(Math.random() * this.cover_selected.section.length);
      let sn:number = Math.trunc(Math.random() * this.covers_list.length)
      this.popular.push(this.covers_list[0].section[sn] || this.covers_list[cl].section[0] || {});
      // this.popular.push(this.covers_list[].section[num] || this.covers_list[0].section[0] || {});
    });
    
    if(localStorage.getItem('token')){
      // this._service.GetViewing(`
      //   minute
      //   name
      //   redirect
      //   thumnail
      // `, this.token).subscribe((data:any)=>{
      //   this.viewing = data.data.get_viewing;
      // });
    }
  }

  get_cover_gql(type:string, mode:string, to:number){
    return this._service.GetSeries(`
      name 
      section {
        _id
        name
        description
        PCCover
        MovileCover
        serie
        date
      }
    `, type, mode, to, this.limit);
  }

  DefineOrder(properties:{type:string, mode:string, to:0 | -1}){
    console.log(properties, this.covers_list.some(element => element.name == `${properties.type}-${properties.mode}-${properties.to}`))
    this.covers_list.forEach(e => {
      console.log(e.name, `${properties.type}-${properties.mode}-${properties.to}`,  `${properties.type}-${properties.mode}-${properties.to}` == e.name);
    })
    if(this.covers_list.some(element => element.name == `${properties.type}-${properties.mode}-${properties.to}`)){
      this.cover_selected = <get_cover_res>this.covers_list.find(element => element.name == `${properties.type}-${properties.mode}-${properties.to}`);
      console.log(this.cover_selected);
      return;
    }
    console.log(properties.mode);
    this.get_cover_gql(properties.type, properties.mode, properties.to).subscribe((data:any)=>{
      this.cover_selected = data.data.get_covers_list;
      console.log('sd', this.cover_selected);
      this.covers_list.push(this.cover_selected);
    });
  }

  DefineLimit():number{
    if(window.innerWidth < 600){
      return 6;
    }else if(window.innerWidth < 750){
      return 6;
    }else if(window.innerWidth < 950){
      return 8;
    }
    return 10;
  }

  rlink(route:string, param:string | number){
    this._route.navigate([route], {queryParams:{time:param}});
  }
}
