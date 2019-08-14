import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HomeLayout } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { NavbarComponent } from './utils/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayout,
    LoginComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
