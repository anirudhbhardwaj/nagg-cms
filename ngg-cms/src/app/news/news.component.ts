import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { NewsService } from './news-service.service';
import { News } from './news.models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from "../auth.service";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = true; //TODO : Need to be changed, and retireved from AuthService
  subscription: Subscription;
  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.subscription = this.authService.logIn$.subscribe(
      changedValue => this.isLoggedIn = changedValue);
  }

  createNewNews() {
    this.router.navigate(['/main/news/new-news']);
  }
}
