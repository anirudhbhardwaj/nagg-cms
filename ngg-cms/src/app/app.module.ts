import { NewsService } from './news/news-service.service';
import { NewsResolveGuard } from './news/news-resolve.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions} from '@angular/http';

import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DashboardModule} from "./dashboard/dashboard.module";
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";
import { environment } from '../environments/environment'
import {InjectionToken} from "@angular/core";
import {Inject} from "@angular/core";


export function httpINterceptorFactory(backend: XHRBackend, reqOptions: RequestOptions): HTTPIntercepterService {
    return new HTTPIntercepterService(backend, reqOptions);
}
// todo figure out why it does not work in other components

export let ENV  = new InjectionToken<any>('app.env');

export function envProvider(): any {
    return environment;
}

@NgModule({
    declarations : [
        AppComponent,
        MainNavComponent,
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
        AppRoutingModule,
        BrowserAnimationsModule,
        DashboardModule,
        DashboardRoutingModule
    ],
    providers : [AuthGuard, AuthService, HttpClient, NewsResolveGuard, NewsService,
        {
        provide: HTTPIntercepterService,
        useFactory: httpINterceptorFactory,
        deps: [XHRBackend, RequestOptions]
        },
        {
            provide: ENV,
            useValue: environment
        }],
    bootstrap : [AppComponent]
})
export class AppModule {
    constructor(@Inject(ENV) environment: any) {
        console.log('main app---- env   =' + environment);
    }
}
