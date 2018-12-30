import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaJogadorPage } from './lista-jogador';

@NgModule({
  declarations: [
    ListaJogadorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaJogadorPage),
  ],
  exports: [
    ListaJogadorPage
  ]
})
export class ListaJogadorPageModule {}
