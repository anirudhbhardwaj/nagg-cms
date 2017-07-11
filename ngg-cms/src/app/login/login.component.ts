import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
//import {Router} from "@angular/router";
import { RouterStateSnapshot, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  routeState: RouterStateSnapshot;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();  
    this.router.navigate([this.authService.redirectUrl]);
  }
}
