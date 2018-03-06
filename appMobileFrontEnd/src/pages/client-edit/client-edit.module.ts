import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ClientEditPage } from './client-edit';

@NgModule({
  declarations: [
    ClientEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientEditPage),
    TranslateModule.forChild()
  ],
})
export class ClientEditPageModule {}
