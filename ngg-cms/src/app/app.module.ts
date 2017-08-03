import { NewsDetailResolveGuard } from './news/news-detail.resolve';
import { SearchResolveGuard } from './search/search-result-resolve.service';
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
import { MainComponent } from './main/main.component';
import { ChipsModule } from 'primeng/primeng';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';
import { NewsItemThumbComponent } from './popular-news/news-item-thumb/news-item-thumb.component';
import { ArchivedNewsComponent } from './archived-news/archived-news.component';
import { SearchResultComponent } from './search/search-result.component';
import { SearchService } from './search/search.service';
import { NewsTileComponent } from './news/news-tile/news-tile.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArchivedNewsThumbComponent } from './archived-news/archived-news-thumb/archived-news-thumb.component';
import { EditGuard } from "./news/news-form/edit-guard.guard";

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
        NewsFormComponent,
        MainComponent,
        NewsDetailComponent,
        PopularNewsComponent,
        NewsItemThumbComponent,
        ArchivedNewsComponent,
        SearchResultComponent,
        NewsTileComponent,
        CarouselComponent,
        ArchivedNewsThumbComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        GridsterModule,
        AppRoutingModule,
        ChipsModule

    ],
    providers: [AuthGuard, AuthService, HttpClient, NewsResolveGuard, NewsService, SearchService, 
        SearchResolveGuard, EditGuard, NewsDetailResolveGuard ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
