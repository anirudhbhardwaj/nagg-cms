import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search/search.service';
import { RouterStateSnapshot, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../shared/shared.models';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  searchText = '';
  isLoggedIn: boolean = false;
  currentUser: User;
  isAdmin = false;
  subscription: Subscription;
  constructor(private authService: AuthService, private searchService: SearchService, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart && val.url.indexOf('/search') < 0) {
        this.searchText = '';
      }
    });
  }

  ngOnInit() {
    // Wrapped in setTimeout to avoid angular@4.2 error: Expression has changed after it was checked
    setTimeout(() => {
      const isLoginFromCache = sessionStorage.getItem('isUserLogin_KEY');
      if (isLoginFromCache === 'true') {
        this.authService.setLogin(true);
      }
      this.currentUser = <User>JSON.parse(this.authService.getUser());
      const isAdminCached = sessionStorage.getItem('isAdmin_KEY');
      if (isAdminCached === 'true') {
        this.authService.setAdmin(true);
      }
      this.isLoggedIn = this.authService.getLogin();
      this.isAdmin = this.authService.getIsAdmin();
      this.authService.logIn$.subscribe(
        changeVal => this.isLoggedIn = changeVal
      );
    }, 0);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
    sessionStorage.clear();
    this.router.navigate(['/main/news/admin']);
  }

  login() {
    this.authService.redirectUrl = this.router.url;
    this.router.navigate(['/login']);
  }

  search() {
    const searchTag = this.searchText
    this.searchText = ''
    this.router.navigate(['/main/news/search'], { queryParams: { 'tag': searchTag } });
  }

  gotoHome() {
    this.router.navigate(['/main/news' + (this.isAdmin ? '/admin' : '')]);
  }
}
