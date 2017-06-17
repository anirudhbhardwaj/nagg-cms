import { News } from './../news.models';
import { Component, OnInit, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css'],

  animations: [
    trigger('newsState', [
      state('inactive', style({
        backgroundColor: 'black',
        color:'white',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: 'white',
        color: 'black',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})
export class NewsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.news.state = 'inactive';
  }

  @Input() news: News

  toggleState() {
    console.log(this.news.state);
    this.news.state = this.news.state === 'active' ? 'inactive' : 'active';
  }

}
