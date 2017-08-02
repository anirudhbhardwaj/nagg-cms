import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { SearchService } from "../search/search.service";
import { RouterStateSnapshot, Router, NavigationStart } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  searchText: string = "";
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  subscription: Subscription;
  constructor(private authService: AuthService, private searchService: SearchService, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart && val.url.indexOf('/search') < 0) {
        this.searchText = "";
      }
    });
  }

  ngOnInit() {
    //Wrapped in setTimeout to avoid angular@4.2 error: Expression has changed after it was checked
    setTimeout(() => {
      this.isLoggedIn = this.authService.isLoggedIn;
      this.isAdmin = this.authService.getIsAdmin();
      this.authService.logIn$.subscribe(
        changeVal => this.isLoggedIn = changeVal
      );
    }, 0);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
    this.router.navigate(['/main/news/admin']);
  }

  login() {
    this.authService.redirectUrl = this.router.url;
    this.router.navigate(['/login']);
  }

  search() {
    let searchTag = this.searchText
    this.searchText = '' 
    this.router.navigate(['/main/news/search'], { queryParams: { "tag": searchTag } });
  }

  gotoHome() {
    this.router.navigate(['/main/news' + (this.isAdmin ? '/admin' : '')]);
  }
}
