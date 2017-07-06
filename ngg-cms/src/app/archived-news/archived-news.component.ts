import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.css']
})
export class ArchivedNewsComponent implements OnInit {
  today =  new Date;
  date1 : Date;
  date2 : Date;
  date3 : Date;
  date4 : Date;
  date5 : Date;

  constructor() { }

  ngOnInit() {
    this.date1 = new Date(this.today.getFullYear(), this.today.getMonth() , 0);
    this.date2 = new Date(this.today.getFullYear(), this.today.getMonth() - 1, 0);
    this.date3 = new Date(this.today.getFullYear(), this.today.getMonth() - 2, 0);
    this.date4 = new Date(this.today.getFullYear(), this.today.getMonth() - 3, 0);
    this.date5 = new Date(this.today.getFullYear(), this.today.getMonth() - 4, 0);
  }


}
