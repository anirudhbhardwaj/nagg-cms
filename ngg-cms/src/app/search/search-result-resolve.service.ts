import { News } from './../news/news.models';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SearchResolveGuard implements Resolve<News[]> {
    constructor(private searchService: SearchService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
        let tag = route.queryParams['tag'];
        return this.searchService.getSearchNews(tag);
    }
}