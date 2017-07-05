import { NewsService } from './../news-service.service';
import { News } from './../news.models';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  @Input() news: News;

}
