import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { SearchService } from "../search/search.service";
import { RouterStateSnapshot, Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
// import {
//     CanActivate, Router,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot
// }                           from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  searchText: string = "";
  isLoggedIn: boolean = false;
  isAdmin: boolean = true; //TODO : Need to be changed, and retireved from AuthService
  subscription: Subscription;
  constructor(private authService: AuthService, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.subscription = this.authService.logIn$.subscribe(
      changedValue => this.isLoggedIn = changedValue);
    //console.log("init main nav");
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
    this.router.navigate(['/main/news'])
  }
  login() {
    this.authService.redirectUrl= this.router.url;
    this.router.navigate(['/login']);
  }

  search() {
    let searchText = this.searchText;
    this.searchText = "";
    this.router.navigate(['/main/news/search'], { queryParams: { "tag": searchText } });
  }

}
