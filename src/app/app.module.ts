import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';
//import { AppRoutingModule } from './app-routing.module';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppComponent }  from './app.component';

/* Feature Modules */
//import { CoreModule } from './core/core.module';
//import { LoginModule } from './login/login.module';

@NgModule({
  imports:      [ 
    BrowserModule,
  //  HttpModule,
  //  LoginModule,
  //  AppRoutingModule,
  //  CoreModule
    ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }