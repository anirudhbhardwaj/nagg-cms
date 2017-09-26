import { WindowRefService } from './../../shared/window-ref.service';
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
    private router: Router, private authService: AuthService, private windowRefService: WindowRefService) {

  }

  ngOnInit() {
    var isLoginFromCache = sessionStorage.getItem("isUserLogin_KEY");
    if (isLoginFromCache == 'true') {
      this.authService.setLogin(true);
    }
    this.isLoggedIn = this.authService.isLoggedIn;
    var isAdminCached = sessionStorage.getItem("isAdmin_KEY");
    if (isAdminCached == 'true') {
      this.authService.setAdmin(true);
    }
    this.isAdmin = this.authService.getIsAdmin();

    this.route.data
      .subscribe((data) => {
        this.news = data.news;
        this.news.description = (this.news.description) ? this.news.description.replace(/<br\s*[\/]?>/gi, '\r\n') : this.news.description;
      });
  }

  loadNews() {
    this.newsService.getNewsById(this.id).subscribe(data => {
      this.news = <News>data;
      this.news.description = (this.news.description) ? this.news.description.replace(/<br\s*[\/]?>/gi, '\r\n') : this.news.description;
    });
  }

  EditNews() {
    this.news.description = (this.news.description) ? this.news.description.replace(/<br\s*[\/]?>/gi, '\r\n') : this.news.description;
    this.newsService.setEditNews(this.news);
    this.router.navigate(['/main/news/new-news']);
  }

  
    deleteNews() {
       var check = this.windowRefService.getNativeWindow().confirm("Are you sure you want to delete the news?");
       if(check) {
           this.newsService.deleteNews(this.news)
           .subscribe(() => {
             this.newsService.updatePopularNewsViews();
             this.router.navigate(["/main/news/admin"]);
           });
       }
    }
}
