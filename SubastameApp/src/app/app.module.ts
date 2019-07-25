import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { User } from '../layers/TR/user';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListProductPage } from '../pages/list-product/list-product';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListProductPage
  ],
  imports: [ 
    FormsModule, 
    BrowserModule,
    HttpClientModule,
    HttpModule,     
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    MyApp,
    LoginPage,
    ListProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    User,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

