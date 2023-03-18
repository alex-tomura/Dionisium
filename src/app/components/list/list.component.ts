import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get_cover_comp, get_cover_res, viewing, serie_cover } from 'src/app/models';
import { SerieServiceService } from 'src/app/services/_handler/serie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  token:any = localStorage.getItem('token');
  viewing:Array<viewing> = [];
  series:Array<get_cover_res> = [];
  orderSeries:get_cover_res = {name:"popular", section:[{}]};
  popular:Array<serie_cover> = [];
  chargue_status:boolean = false;

  constructor(private _service:SerieServiceService, private _route:Router) { }

  ngOnInit(): void {
    this.get_cover_gql([0, 1, 2, 3, 4, 5,]).subscribe((data:any)=>{
      this.series = get_cover_comp(data.data.get_cover);
      this.order('popular');
      this.chargue_status = true;
      let num:number = Math.trunc(Math.random() * 10);
      this.popular.push(this.series[0].section[num] || this.series[0].section[0] || {});
      this.popular.push(this.series[1].section[num] || this.series[0].section[0] || {});
    });
    
    if(localStorage.getItem('token')){
      this._service.GetViewing(`
        minute
        name
        redirect
        thumnail
      `, this.token).subscribe((data:any)=>{
        this.viewing = data.data.get_viewing;
      });
    }
  }

  get_cover_gql(types:Array<number>){
    let limit = 10; if(window.innerWidth < 950 && window.innerWidth > 600){limit = 11}
    return this._service.GetSeries(`
      name 
      section {
        _id
        name
        thumnail
        serie
        date
      }
    `, types, limit);
  }

  order(value:string){
    this.orderSeries = this.series.filter(element => element.name == value)[0] || {name:value, __typename:value, section:[]};
  }

  rlink(route:string, param:string | number){
    this._route.navigate([route], {queryParams:{time:param}});
  }
}
