import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { News } from './news.models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
}
