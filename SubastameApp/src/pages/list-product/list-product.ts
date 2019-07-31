import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/* import { Router } from '@angular/router'; */
import { ProductDetailProvider } from "../../providers/product-detail/product-detail";
import { DetailProductPage } from "../detail-product/detail-product";
import { NavController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage implements OnInit {


  cart = [];
  items = [];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private productDetailProvider: ProductDetailProvider, public navCtrl: NavController) { }

  ngOnInit() {
    this.items = this.productDetailProvider.getProducts();
    this.cart = this.productDetailProvider.getCart();
  }

  addToCart(product) {
    this.productDetailProvider.addProduct(product); 
  }

  openCart() {
     /* this.router.navigate(['productDetail']); */
  }

  openDetailProduct(product){
    console.log(product)
    this.navCtrl.push(DetailProductPage);

  }



}
