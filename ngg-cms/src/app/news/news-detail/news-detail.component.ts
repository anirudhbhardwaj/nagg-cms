import { Component, OnInit } from '@angular/core';
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
  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  news: News = new News();

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.admin$.subscribe(
      changedVal => this.isAdmin = changedVal
    );
    this.route.paramMap.map((params: ParamMap) =>
      this.newsService.getNewsById(params.get('id')))
      .subscribe(
      (news: News) => {
        //console.log("news = ",news);
        this.news = news;
      });
  }

  EditNews() {
    this.newsService.setEditNews(this.news);
    this.router.navigate(['/main/news/new-news'])
  }
}
