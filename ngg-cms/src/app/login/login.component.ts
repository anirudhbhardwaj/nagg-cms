import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Constants } from './../shared/constants';
import { RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  routeState: RouterStateSnapshot;
  model: any = {};
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

   login() {
    // this.authService.login(this.model.username, this.model.password);
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                  if (data) {
                     this.router.navigate([Constants.SUCCESSFULL_LOGIN_REDIRECTION_URL]);
                  }else {
                    this.errorMessage = 'Invalid username and password';
                   this.model = {};
                  }
                },
                error => {
                   // show error
                    this.errorMessage = 'Invalid username and password';
                   this.model = {};
                   console.log('Error');
                });
    }
}
