import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from './shared/httpClient.service';
import 'rxjs/add/observable/of';
import { User } from './shared/shared.models';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

    private isLoggedInSource = new BehaviorSubject<boolean>(false);
    isLoggedIn = false;
    loggedInUser: User;
    public logIn$ = this.isLoggedInSource.asObservable();
    isAdmin = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        console.log('username ' + username + ' pwd ' + password);
        return this.httpClient.get('http://localhost:3000/api/login', { username: username, password: password })
            .map((response: Response) => {
                this.loggedInUser = null;
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.username) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', user);
                    this.loggedInUser = user;
                    this.setLogin(true);
                    sessionStorage.setItem('isUserLogin_KEY', JSON.stringify(true));
                    return true;
                }
                return false;
                //return this.isLoggedIn;
            }).catch((error: any) => error.json().error || 'Server error');
    }

    logout() {
        this.isLoggedInSource.next(false);
        this.setLogin(false);
                this.loggedInUser = null;
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
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

     getUser(): User {
        return this.loggedInUser;
    }
}
