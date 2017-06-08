import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NewsComponent} from "./news/news.component";
import {KpiComponent} from "./kpi/kpi.component";
import {SevenKeysComponent} from "./seven-keys/seven-keys.component";
import {ProjectComponent} from "./project/project.component";

const appRoutes: Routes = [
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
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}