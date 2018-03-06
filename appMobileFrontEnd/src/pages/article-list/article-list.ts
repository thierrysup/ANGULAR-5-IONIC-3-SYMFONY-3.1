import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';


import { Article } from '../../models/article';
import { ArticleProvider } from '../../providers/providers';

/**
 * Generated class for the ArticleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-article-list',
  templateUrl: 'article-list.html',
})
export class ArticleListPage {

 
  currentArticles: Article[] ;
  articleIcon :string = "assets/img/article/article.gif";
  

  constructor(public navCtrl: NavController, public articleProvider: ArticleProvider, public modalCtrl: ModalController) {
    //this.currentArticles = this.articleProvider.query();
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleListPage');
    this.getAllArticle();
  }

    getAllArticle(){
      this.articleProvider.query().subscribe(
        data => { this.currentArticles = data;
  // this.currentArticles = Array.of(this.currentArticles); 
         },
        err => console.error(err), 
        () => console.log('getArticles completed') 
        );
    }

  addArticle() {
    let addModal = this.modalCtrl.create('ArticleCreatePage');
    addModal.onDidDismiss(article => {
      console.log('hello boy ...');
      if (article) {
        console.log("hello toto ..."+article);
        this.articleProvider.add(article).subscribe(
          data => {  
            console.log('Your article had been save ...');
           },
          err => console.error(err), 
          () => console.log('getArticles completed') 
          );
      }
      this.ionViewDidLoad();
    })
    addModal.present();
  
  }

  updateArticle(article:Article) {
    let addModal = this.modalCtrl.create('ArticleEditPage',{
      articleModal: article
    });
    addModal.onDidDismiss(article => {
      console.log('hello boy ...');
      if (article) {
        this.articleProvider.update(article).subscribe(
          data => {  
            console.log('Your article had been updated ...');
           },
          err => console.error(err), 
          () => console.log('getArticles completed') 
          );
      }
      this.ionViewDidLoad();
    })
    addModal.present();
  
  }


  /**
   * Delete an article from the list of articleProvider.
   */
  deleteArticle(article:Article) {
      this.articleProvider.delete(article.id).subscribe((res: any) => {
        // If the API returned a successful response,
          console.log('Your article had been deleted ...');
      }, err => {
        console.error('ERROR', err);
      });
      this.ionViewDidLoad();
    
  }

  /**
   * Navigate to the detail page for this article.
   */
  openArticle(article: Article) {
    this.navCtrl.push('ArticleDetailPage', {
      article: article, articleIcon : this.articleIcon
    });
  }

}

