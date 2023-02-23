import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serie_cover } from 'src/app/models';
import { ListService } from './service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  viewing:Array<any> = [];
  series:Array<any> = [
    {section:<Array<serie_cover>>[], tittle:'popular'},
    {section:<Array<serie_cover>>[], tittle:'nuevo'},
    {section:<Array<serie_cover>>[], tittle:'shonen'},
    {section:<Array<serie_cover>>[], tittle:'seinen'},
    {section:<Array<serie_cover>>[], tittle:'dobladas'},
    {section:<Array<serie_cover>>[], tittle:'largas'},
  ]
  orderSeries:Array<any> = [
    {section:<Array<serie_cover>>[], tittle:'lo mas popular'}
  ];
  popular:Array<any> = []; popular_left:number = 0;
  chargue_status:boolean = false;

  constructor(private _service:ListService, private _route:Router) { }

  ngOnInit(): void {
    this._service.getList().subscribe((data:any)=>{
      this.series[0].section = data.mostPopular;
      this.series[1].section = data.mostNew;
      this.series[2].section = data.shonen;
      this.series[3].section = data.seinen;
      this.series[4].section = data.spanish;
      this.series[5].section = data.fiveSeasons;
      this.orderSeries[0].section = data.mostPopular;
      this.popular = data.popular_preview;
      this.popular_activate();
      this.chargue_status = true;
    });
    if(localStorage.getItem('token')){
      this._service.getViewing().subscribe((data:any)=>{
        this.viewing = data.viewing;
      });
    }
  }

  order(value:string){
    this.orderSeries = this.series.filter(element => element.tittle == value);
  }

  popular_activate(){
    setInterval(()=>{
      if(this.popular_left <= -500){this.popular_left = 100};
      this.popular_left -= 100;
    }, 5000);
  }

  rlink(route:string, param:string){
    this._route.navigate([route], {queryParams:{time:param}});
  }
}
