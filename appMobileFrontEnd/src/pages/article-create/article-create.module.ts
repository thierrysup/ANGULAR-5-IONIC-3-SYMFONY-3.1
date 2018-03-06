import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleCreatePage } from './article-create';

@NgModule({
  declarations: [
    ArticleCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleCreatePage),
    TranslateModule.forChild()
  ],
})
export class ArticleCreatePageModule {}
