import { NewsService } from './../news-service.service';
import { News } from './../news.models';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {
  news: News;

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
     this.route.data
      .subscribe((data) => {
        this.news = data.newsList;
      });
  }
}
