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
import { DetailProductPage } from "../pages/detail-product/detail-product";
import { ProductDetailProvider } from '../providers/product-detail/product-detail';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListProductPage,
    DetailProductPage
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
    ListProductPage,
    DetailProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    User,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductDetailProvider
  ]
})
export class AppModule {}

