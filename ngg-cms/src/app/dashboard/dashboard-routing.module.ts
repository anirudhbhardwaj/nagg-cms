import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {DashboardMainComponent} from "./dashboard-main/dashboard-main.component";

const appRoutes: Routes = [
            {
                path : '',
                component : DashboardMainComponent
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
export class DashboardRoutingModule {
}