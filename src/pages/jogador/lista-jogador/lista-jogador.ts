import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Jogador} from "../../../modelos/jogador";

/**
 * Generated class for the ListaJogadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ListaClientePage'
})
@Component({
  selector: 'page-lista-jogador',
  templateUrl: 'lista-jogador.html',
})
export class ListaJogadorPage {

  public jogdores: Jogador;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaJogadorPage');
  }

}
