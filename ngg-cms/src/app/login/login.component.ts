import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log("init auth service");
  }

  login() {
    console.log("in login component");
    if(this.authService.login()){
      console.log("navigating to dashboard");
      this.router.navigate([this.authService.redirectUrl])
    }
  }
}
