import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../../news/news.models';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../news/news-service.service';

@Component({
  selector: 'app-news-item-thumb',
  templateUrl: './news-item-thumb.component.html',
  styleUrls: ['./news-item-thumb.component.css']
})
export class NewsItemThumbComponent implements OnInit {
  @Input() newsItem: News;
  @Output() newsClicked: EventEmitter<any> = new EventEmitter();
  // commentcount = 0;
  // likecount = 0;

  constructor(private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  redirectToNewsDetail() {
    this.router.navigate(['main/news/newsDetail', this.newsItem._id])
      .then(() => {
        this.newsClicked.emit();
      });

  }
}