import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProductPage } from './list-product';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProductPage),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  bootstrap: [ListProductPage]
})
export class ListProductPageModule {}
