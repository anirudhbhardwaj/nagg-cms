import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { SearchService } from "../search/search.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  searchText: string = "";

  constructor(private authService: AuthService, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    console.log("init main nav");
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }

  search() {
    this.searchService.searchNews(this.searchText);
  }

}
