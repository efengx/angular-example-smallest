import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './demo/dashboard/dashboard.component';
import {DemoComponent} from './demo/demo.component';
import {NavigationComponent} from './demo/navigation/navigation.component';
import {TableComponent} from './demo/table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'navigation',
        component: NavigationComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
