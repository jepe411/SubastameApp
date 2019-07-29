import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailProvider {

  constructor() {
    console.log('Hello ProductDetailProvider Provider');
  }
  
  private data = [
    {
      category: 'Tecnologia',
      expanded: true,
      products: [
        { id: 0, name: 'Table', price: '8000' ,image: 'https://img.mobiscroll.com/demos/nfs.png'},
        { id: 1, name: 'Portatil', price: '5000', image: 'https://img.mobiscroll.com/demos/worms3.png'},
        { id: 2, name: 'TunCelulara', price: '9000', image: 'https://img.mobiscroll.com/demos/angrybirds.png'},
        { id: 3, name: 'Televisor', price: '700', image: 'https://img.mobiscroll.com/demos/nfs.png' }
      ]
    },
    {
      category: 'Automoviles',
      products: [
        { id: 4, name: 'McLaren', price: '8000', image: 'https://img.mobiscroll.com/demos/heartstone.png' },
        { id: 5, name: 'BMW', price: '6000',  image: 'https://img.mobiscroll.com/demos/fruitninja.png' }
      ]
    },
    {
      category: 'Viajes',
      products: [
        { id: 6, name: 'Bogota', price: '8000', image: 'https://img.mobiscroll.com/demos/subwaysurf.png' },
        { id: 7, name: 'Panama', price: '50000' , image: 'https://img.mobiscroll.com/demos/templerun.png'},
        { id: 8, name: 'New York', price: '9000' , image: 'https://img.mobiscroll.com/demos/minecraft.png'}
      ]
    }
  ];
 
  private cart = [];
 
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}
