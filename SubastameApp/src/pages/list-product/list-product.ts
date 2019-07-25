import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  items = [];


  newGames = [{
    image: 'https://img.mobiscroll.com/demos/worms3.png',
    title: 'Worms 3',
    dev: '$350.000',
    rank: 4.2
  }, {
    image: 'https://img.mobiscroll.com/demos/candycrush.png',
    title: 'Candy Crush Saga',
    dev: '$450.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/angrybirds.png',
    title: 'Angry Birds',
    dev: '$850.000',
    rank: 4.4
  }, {
    image: 'https://img.mobiscroll.com/demos/nfs.png',
    title: 'Need for Speed',
    dev: '$770.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/heartstone.png',
    title: 'Hearthstone',
    dev: '$950.000',
    rank: 4.2
  }, {
    image: 'https://img.mobiscroll.com/demos/fruitninja.png',
    title: 'Fruit Ninja',
    dev: '$350.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/subwaysurf.png',
    title: 'Subway Surfers',
    dev: '$250.000',
    rank: 4.4
  }, {
    image: 'https://img.mobiscroll.com/demos/templerun.png',
    title: 'Temple Run',
    dev: '$450.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/minecraft.png',
    title: 'Minecraft: Pocket Edition',
    dev: '$450.000',
    rank: 4.4
  },
  {
    image: 'https://img.mobiscroll.com/demos/worms3.png',
    title: 'Worms 3',
    dev: '$350.000',
    rank: 4.2
  }, {
    image: 'https://img.mobiscroll.com/demos/candycrush.png',
    title: 'Candy Crush Saga',
    dev: '$450.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/angrybirds.png',
    title: 'Angry Birds',
    dev: '$850.000',
    rank: 4.4
  }, {
    image: 'https://img.mobiscroll.com/demos/nfs.png',
    title: 'Need for Speed',
    dev: '$770.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/heartstone.png',
    title: 'Hearthstone',
    dev: '$950.000',
    rank: 4.2
  }, {
    image: 'https://img.mobiscroll.com/demos/fruitninja.png',
    title: 'Fruit Ninja',
    dev: '$350.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/subwaysurf.png',
    title: 'Subway Surfers',
    dev: '$250.000',
    rank: 4.4
  }, {
    image: 'https://img.mobiscroll.com/demos/templerun.png',
    title: 'Temple Run',
    dev: '$450.000',
    rank: 4.3
  }, {
    image: 'https://img.mobiscroll.com/demos/minecraft.png',
    title: 'Minecraft: Pocket Edition',
    dev: '$450.000',
    rank: 4.4
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }
        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
  ondemand_details(a){
    alert(a);
  }

  

  

}
