import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from './../news-service.service';
import { AuthService } from '../../auth.service';
import { News } from './../news.models';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.news = data.newsList;
        this.route.data.subscribe((data) => {
          var isAdmin = (data.isAdmin != null && data.isAdmin != undefined) ? data.isAdmin : false;
          this.authService.setAdmin(isAdmin);
          if (isAdmin) {
            sessionStorage.setItem("isAdmin_KEY", JSON.stringify(isAdmin));
          } else {
            sessionStorage.clear();
          }
        });
      });
  }
}
