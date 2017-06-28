import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsFormComponent } from './news/news-form/news-form.component';
import { NewsService } from './news/news-service.service';
import { NewsResolveGuard } from './news/news-resolve.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridsterModule } from 'angular-gridster2/dist/index';
import { NewsComponent } from './news/news.component';
import { KpiComponent } from './kpi/kpi.component';
import { ProjectComponent } from './project/project.component';
import { SevenKeysComponent } from './seven-keys/seven-keys.component';
import { NewsOverviewComponent } from './news/news-overview/news-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./app-authguard.service";
import { AuthService } from "./auth.service";
import { HttpClient } from './shared/httpClient.service';
import { LoginComponent } from './login/login.component';
import { TagInputModule } from 'ng2-tag-input';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        DashboardComponent,
        NewsComponent,
        KpiComponent,
        ProjectComponent,
        SevenKeysComponent,
        NewsOverviewComponent,
        LoginComponent,
        NewsFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,        
        FormsModule,
        HttpModule,
        GridsterModule,
        AppRoutingModule,
        TagInputModule

    ],
    providers: [AuthGuard, AuthService, HttpClient, NewsResolveGuard, NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
