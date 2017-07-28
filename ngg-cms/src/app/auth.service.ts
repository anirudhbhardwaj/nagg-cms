import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private isLoggedInSource = new BehaviorSubject<boolean>(false);
    private isAdminSource = new BehaviorSubject<boolean>(false);
    isLoggedIn: boolean = false;
    public logIn$ = this.isLoggedInSource.asObservable();
    public admin$ = this.isAdminSource.asObservable();
    isAdmin: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): boolean {
        this.isLoggedInSource.next(true);
        this.isLoggedIn = true;
        return this.isLoggedIn;
    }

    logout(): void {
        this.isLoggedInSource.next(false);
        this.isLoggedIn = false;
    }

    setAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;
        this.isAdminSource.next(this.isAdmin);
    }
}