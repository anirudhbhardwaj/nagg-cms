import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GridsterModule} from 'angular-gridster2/dist/index';
import {NewsComponent} from './news/news.component';
import {RouterModule}   from '@angular/router';
import {KpiComponent} from './kpi/kpi.component';
import {ProjectComponent} from './project/project.component';
import {SevenKeysComponent} from './seven-keys/seven-keys.component';
import { NewsOverviewComponent } from './news/news-overview/news-overview.component';

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

        RouterModule.forRoot([
            {
                path : 'dashboard',
                component : DashboardComponent
            },
            {
                path : 'news',
                component : NewsComponent
            },
            {
                path : 'kpis',
                component : KpiComponent
            },
            {
                path : 'sevenkeys',
                component : SevenKeysComponent
            },
            {
                path : 'projects',
                component : ProjectComponent
            },
            {
                path : '',
                redirectTo : '/dashboard',
                pathMatch : 'full'
            }
        ])

    ],
    providers : [],
    bootstrap : [AppComponent]
})
export class AppModule {
}
