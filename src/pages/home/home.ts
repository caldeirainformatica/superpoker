import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavLifecycles } from "../../util/ionic/nav/nav-lifecycles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles{

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    console.log('home');
  }

}
