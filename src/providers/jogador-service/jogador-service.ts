import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Jogador} from "../../modelos/jogador";
import {Observable} from "rxjs";

/*
  Generated class for the JogadorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JogadorServiceProvider {


  constructor(public http: HttpClient) {
    console.log('Hello JogadorServiceProvider Provider');
  }
  listJogador(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>('http://poker.tecnologia.ws/jogador/listaJogador.php');
  }

}
