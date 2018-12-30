import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormJogadorPage } from './form-jogador';

@NgModule({
  declarations: [
    FormJogadorPage,
  ],
  imports: [
    IonicPageModule.forChild(FormJogadorPage),
  ],
})
export class FormJogadorPageModule {}
