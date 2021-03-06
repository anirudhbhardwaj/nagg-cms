import { Constants } from './../shared/constants';
import { News } from './../news/news.models';
import { Injectable } from '@angular/core';
import { HttpClient } from "../shared/httpClient.service";
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

class dateRange {
  datefrom
} 

@Injectable()
export class SearchService {
    searchData: News[];

    constructor(private httpClient: HttpClient, private router: Router) { }

    searchNews(searchTag) {
        this.getSearchNews(searchTag).subscribe(data => {
            this.searchData = data
        });
    }

    getFoundData(): News[] {
        return this.searchData;
    }

    getSearchNews(searchTag): Observable<News[]> {
        return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/search", { tag: searchTag })
            .map(res => {
                let body = res.json();
                return body || {};
            });
    }
    public getArchivedNews(startDate, endDate): Observable<News[]> {
        return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/archive", { startDate: startDate, endDate: endDate })
            .map(res => {
                let body = res.json();
                return body || {};
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    public getNewsDates(): Observable<dateRange[]> {
        return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/ardate")
            .map(res => {
                let body = res.json();
                return body || {};
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}