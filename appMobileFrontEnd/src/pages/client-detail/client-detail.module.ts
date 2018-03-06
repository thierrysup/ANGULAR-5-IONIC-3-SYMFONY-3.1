import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TranslateModule } from '@ngx-translate/core';

import { ClientDetailPage } from './client-detail';

@NgModule({
  declarations: [
    ClientDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientDetailPage),
    TranslateModule.forChild()
  ],
})
export class ClientDetailPageModule {}
