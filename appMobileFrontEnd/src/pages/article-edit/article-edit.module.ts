import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleEditPage } from './article-edit';

@NgModule({
  declarations: [
    ArticleEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleEditPage),
    TranslateModule.forChild()
  ],
})
export class ArticleEditPageModule {}
