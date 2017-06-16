import { NewsService } from './news/news-service.service';
import { NewsResolveGuard } from './news/news-resolve.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions} from '@angular/http';

import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GridsterModule} from 'angular-gridster2/dist/index';
import {NewsComponent} from './news/news.component';
import {KpiComponent} from './kpi/kpi.component';
import {ProjectComponent} from './project/project.component';
import {SevenKeysComponent} from './seven-keys/seven-keys.component';
import { NewsOverviewComponent } from './news/news-overview/news-overview.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from "./app-authguard.service";
import {AuthService} from "./auth.service";
import { HttpClient } from './shared/httpClient.service';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {HTTPIntercepterService} from "./shared/HTTPIntercepterService";
import {BaseDTO} from "./news/news.models";

export function httpINterceptorFactory(backend: XHRBackend, reqOptions: RequestOptions): HTTPIntercepterService {
    return new HTTPIntercepterService(backend, reqOptions);
}

@NgModule({
    declarations : [
        AppComponent,
        MainNavComponent,
        DashboardComponent,
        NewsComponent,
        KpiComponent,
        ProjectComponent,
        SevenKeysComponent,
        NewsOverviewComponent,
        LoginComponent,
        MainComponent
    ],
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        GridsterModule,
        AppRoutingModule

    ],
    providers : [AuthGuard, AuthService, HttpClient, NewsResolveGuard, NewsService, {
        provide: HTTPIntercepterService,
        useFactory: httpINterceptorFactory,
        deps: [XHRBackend, RequestOptions]
    }],
    bootstrap : [AppComponent]
})
export class AppModule {
}
