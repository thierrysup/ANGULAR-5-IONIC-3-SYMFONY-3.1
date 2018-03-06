import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ClientListPage } from './client-list';

@NgModule({
  declarations: [
    ClientListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientListPage),
    TranslateModule.forChild()
  ],
})
export class ClientListPageModule {}
