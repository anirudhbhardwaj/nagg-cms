import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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

@NgModule({
    declarations : [
        AppComponent,
        MainNavComponent,
        DashboardComponent,
        NewsComponent,
        KpiComponent,
        ProjectComponent,
        SevenKeysComponent,
        NewsOverviewComponent
    ],
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        GridsterModule,
        AppRoutingModule

    ],
    providers : [AuthGuard, AuthService],
    bootstrap : [AppComponent]
})
export class AppModule {
}
