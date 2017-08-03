import { Router } from '@angular/router';
import { News } from './../news.models';
import { NewsService } from './../news-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-tile',
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.css']
})
export class NewsTileComponent implements OnInit {

  constructor(private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
  }

  @Input() news: News

  redirectToNewsDetail(news: News) {
    this.router.navigate(['main/news/newsDetail', news._id]).then(
      () => this.newsService.updatePopularNewsViews());
  }

}
