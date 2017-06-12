import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log("init main nav");
  }
  logout() {
    this.authService.logout();
  }

}
