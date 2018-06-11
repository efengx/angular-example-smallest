import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {DashboardComponent} from './demo/dashboard/dashboard.component';
import {DemoComponent} from './demo/demo.component';
import {NavigationComponent} from './demo/navigation/navigation.component';
import {TableComponent} from './demo/table/table.component';
import {BaseComponent} from './component/base/base.component';
import {RoutePageComponent} from './component/base/route-page/route-page.component';
import {PageComponent} from './component/base/page/page.component';
import {RegisterComponent} from './component/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'base',
    component: BaseComponent,
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
