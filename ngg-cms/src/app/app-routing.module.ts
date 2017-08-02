import { SearchResolveGuard } from './search/search-result-resolve.service';
import { NewsOverviewComponent } from './news/news-overview/news-overview.component';
import { NewsFormComponent } from './news/news-form/news-form.component';
import { NewsResolveGuard } from './news/news-resolve.service';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NewsComponent } from "./news/news.component";
import { KpiComponent } from "./kpi/kpi.component";
import { SevenKeysComponent } from "./seven-keys/seven-keys.component";
import { ProjectComponent } from "./project/project.component";
import { AuthGuard } from "./app-authguard.service";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { SearchResultComponent } from './search/search-result.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { EditGuard } from "./news/news-form/edit-guard.guard";

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'news',
                component: NewsComponent,
                children: [
                    {
                        path: '',
                        component: NewsOverviewComponent,
                        resolve: { newsList: NewsResolveGuard }
                    },
                    {
                        path: 'newsDetail/:id',
                        component: NewsDetailComponent
                    },
                    {
                        path: 'new-news',
                        component: NewsFormComponent,
                        canActivate: [AuthGuard],
                        canDeactivate: [EditGuard]
                    },
                    {
                        path: 'search',
                        component: SearchResultComponent,
                        resolve: { searchData: SearchResolveGuard }
                    },
                     {
                        path: 'admin',
                        component: NewsOverviewComponent,
                        resolve: {newsList: NewsResolveGuard},
                        data: { isAdmin: true }
                    }
                ]
            },
            {
                path: 'kpis',
                component: KpiComponent
            },
            {
                path: 'sevenkeys',
                component: SevenKeysComponent
            },
            {
                path: 'projects',
                component: ProjectComponent
            },
            {
                path: '',
                redirectTo: 'news',
                pathMatch: 'full'

            }
        ]
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
