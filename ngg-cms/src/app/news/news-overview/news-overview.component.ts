import { NewsService } from './../news-service.service';
import { News } from './../news.models';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {

  constructor(private newsService: NewsService,
   private router: Router) { }

  ngOnInit() {
  }

  @Input() news: News

  redirectToNewsDetail(news: News) {
  this.router.navigate(['main/newsDetail', news._id]);
}

}
