import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ClientCreatePage } from './client-create';

@NgModule({
  declarations: [
    ClientCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ClientCreatePage
  ]
})
export class ClientCreatePageModule {}
