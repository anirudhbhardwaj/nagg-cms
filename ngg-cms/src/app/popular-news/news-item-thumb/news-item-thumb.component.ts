import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news/news.models';
import { Router } from '@angular/router';
import { NewsService } from '../../news/news-service.service';

@Component({
  selector: 'app-news-item-thumb',
  templateUrl: './news-item-thumb.component.html',
  styleUrls: ['./news-item-thumb.component.css']
})
export class NewsItemThumbComponent implements OnInit {
  @Input() newsItem: News;
  commentcount=0;
  likecount=0;

  constructor(private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
    this.newsItem.reactions.forEach((reaction)=> {
      if (reaction.comment) {
        this.commentcount += 1;
      }
      if (reaction.isLike) {
        this.likecount += 1;
      }
    })
  }

  redirectToNewsDetail() {
    this.router.navigate(['main/news/newsDetail', this.newsItem._id]);

  }
}