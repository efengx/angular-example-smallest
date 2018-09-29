import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {DashboardComponent} from './demo/dashboard/dashboard.component';
import {DemoComponent} from './demo/demo.component';
import {BaseComponent} from './component/base/base.component';
import {RoutePageComponent} from './component/base/route-page/route-page.component';
import {PageComponent} from './component/base/page/page.component';
import {RegisterComponent} from './component/register/register.component';
import {LoginRouteGuard} from './activate/login-route-guard';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  },
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
    children: [
      {
        path: 'page',
        component: PageComponent,
        canActivate: [LoginRouteGuard],
      },
      {
        path: 'route-page/:id',
        component: RoutePageComponent,
        canActivate: [LoginRouteGuard]
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
