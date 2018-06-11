import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { LoginComponent } from './component/login/login.component';
import { NavigationComponent } from './demo/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TableComponent } from './demo/table/table.component';
import { DemoComponent } from './demo/demo.component';
import { BaseComponent } from './component/base/base.component';
import { PageComponent } from './component/base/page/page.component';
import { RoutePageComponent } from './component/base/route-page/route-page.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavigationComponent,
    TableComponent,
    DemoComponent,
    BaseComponent,
    PageComponent,
    RoutePageComponent,
    RegisterComponent,
  ],
  entryComponents: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [],
})
export class AppModule { }
