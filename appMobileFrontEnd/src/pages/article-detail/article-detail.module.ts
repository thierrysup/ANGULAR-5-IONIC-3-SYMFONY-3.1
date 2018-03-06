import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleDetailPage } from './article-detail';

@NgModule({
  declarations: [
    ArticleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleDetailPage),
    TranslateModule.forChild()
  ],
})
export class ArticleDetailPageModule {}
