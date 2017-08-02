import { NewsService } from '../news/news-service.service';
import { News } from '../news/news.models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.css']
})
export class PopularNewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) {
    this.newsService.updatePopularNews$.subscribe(
      () => this.updateComponent());
  }

  ngOnInit() {
    this.updateComponent();
  }

  updateComponent() {
    this.newsService.getPopularNews().subscribe(news => {
      this.news = news;
    });
  }
}