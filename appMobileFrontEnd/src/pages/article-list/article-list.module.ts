import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleListPage } from './article-list';

@NgModule({
  declarations: [
    ArticleListPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleListPage),
    TranslateModule.forChild()
  ],
})
export class ArticleListPageModule {}
