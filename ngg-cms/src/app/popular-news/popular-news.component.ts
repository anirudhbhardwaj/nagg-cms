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

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(news => {
      news.sort(function (a, b) {
        return b.reactCount - a.reactCount;
      });
      console.log(news);
      this.news = news;
      // this.news.splice(5);
    });
  }
}





