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
  imageUrl: string;

  constructor(private newsService: NewsService,
   private router: Router) { }

  ngOnInit() {
    this.imageUrl = encodeURI("localhost:3000/uploads/" + this.news.imageUrl);
  }

  @Input() news: News

  redirectToNewsDetail(news: News) {
  this.router.navigate(['main/newsDetail', news._id]);
}

}
