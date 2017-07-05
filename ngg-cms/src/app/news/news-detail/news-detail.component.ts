import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../news-service.service';
import { News } from '../news.models';

/**
 * @Component 
 * @desc This component is used to show user the complete details of a news
 * @author : Bhavya Dhingra
 */
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router) { }
  news: News = new News();

  ngOnInit() {
    this.route.paramMap.map((params: ParamMap) =>
      this.newsService.getNewsById(params.get('id')))
      .subscribe((news: News) => this.news = news);
  }

}
