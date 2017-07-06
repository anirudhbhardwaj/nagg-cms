import { Injectable } from '@angular/core';
import { HttpClient } from "../shared/httpClient.service";
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class SearchService {
    searchData: Array<string> = [];
    constructor(private httpClient: HttpClient, private router: Router) { }

    searchNews(searchTag) {
        this.getSearchNews(searchTag).subscribe(data => console.log(data));
        this.router.navigate(['/main/news/search']);
    }

    getFoundData(): Array<string> {
        return this.searchData;
    }

    getSearchNews(searchTag): Observable<any[]> {
        return this.httpClient.get("http://localhost:3000/api/news/search", { tag: searchTag })
            .map(res => {
                let body = res.json();
                return body || {};
            });
    }
}