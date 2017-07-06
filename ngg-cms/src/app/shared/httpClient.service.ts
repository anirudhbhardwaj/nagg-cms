import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }

    get(url, data?) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        console.log('param data = ',data);
        return this.http.get(url, {
            headers: headers,
            params: data
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}
