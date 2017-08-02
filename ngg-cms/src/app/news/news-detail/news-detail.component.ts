import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../news-service.service';
import { News } from '../news.models';
import { AuthService } from "../../auth.service";

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
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  news: News;
  id: string;

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.authService.getIsAdmin();

     this.route.data
      .subscribe((data) => {
        this.news = data.news;
      });
  }

  loadNews() {
    this.newsService.getNewsById(this.id).subscribe(data => {
      this.news = <News>data
    });
  }

  EditNews() {
    this.newsService.setEditNews(this.news);
    this.router.navigate(['/main/news/new-news'])
  }
}
