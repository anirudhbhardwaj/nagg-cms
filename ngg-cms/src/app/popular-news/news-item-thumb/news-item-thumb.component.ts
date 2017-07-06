import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item-thumb',
  templateUrl: './news-item-thumb.component.html',
  styleUrls: ['./news-item-thumb.component.css']
})
export class NewsItemThumbComponent implements OnInit {
@Input() newsItem : any;
  constructor() { }

  ngOnInit() {
  }

}
