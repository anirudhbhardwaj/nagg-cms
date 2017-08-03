import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private isLoggedInSource = new BehaviorSubject<boolean>(false);
    isLoggedIn: boolean = false;
    public logIn$ = this.isLoggedInSource.asObservable();
    isAdmin: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): boolean {        
        this.setLogin(true);
        sessionStorage.setItem("isUserLogin_KEY", JSON.stringify(true));
        return this.isLoggedIn;
    }

    logout(): void {
        this.isLoggedInSource.next(false);
        this.setLogin(false);        
    }

    setLogin(isLoggedIn: boolean): void {
        this.isLoggedInSource.next(isLoggedIn);
        this.isLoggedIn = isLoggedIn;
    }

    getLogin() {
        return this.isLoggedIn;
    }

    setAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;       
    }

    getIsAdmin() {
        return this.isAdmin;
    }
}