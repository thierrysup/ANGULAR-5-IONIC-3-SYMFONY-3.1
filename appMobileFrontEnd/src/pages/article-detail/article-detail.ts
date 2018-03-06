import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Article} from '../../models/article';
import {ArticleProvider} from '../../providers/providers';

/**
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {

  item:Article;
  articleIcon :string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private articleProvider :ArticleProvider) {
    this.item = navParams.get('article') || articleProvider.defaultArticle;
    this.articleIcon = navParams.get('articleIcon') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailPage');
  }

}

