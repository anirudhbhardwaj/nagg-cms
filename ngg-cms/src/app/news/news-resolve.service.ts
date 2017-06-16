import { NewsService } from './news-service.service';
import { News } from './news.models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Response} from '@angular/http';

@Injectable()
export class NewsResolveGuard implements Resolve<Response> {
    constructor(private newsService: NewsService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response> {
        return this.newsService.getAllNews();
    }
}