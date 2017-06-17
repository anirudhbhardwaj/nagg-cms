import {NewsResolveGuard} from './news/news-resolve.service';
import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {KpiComponent} from "./kpi/kpi.component";
import {SevenKeysComponent} from "./seven-keys/seven-keys.component";
import {ProjectComponent} from "./project/project.component";
import {AuthGuard} from "./app-authguard.service";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {DashboardMainComponent} from "./dashboard/dashboard-main/dashboard-main.component";

const appRoutes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'main',
        component : MainComponent,
        canActivate : [AuthGuard],
        children: [
            {
                path : '',
                component : DashboardMainComponent
            },
            {
                path : 'news',
                component : NewsComponent,
                resolve : {newsList : NewsResolveGuard}
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
                redirectTo : 'dashboard',
                pathMatch : 'full'
            }
        ]
    },
    {
        path : '',
        redirectTo : '/main',
        pathMatch : 'full'
    }
];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {
}