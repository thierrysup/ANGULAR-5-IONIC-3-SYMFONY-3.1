import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';


import {Article} from '../../models/article';
import {Client} from '../../models/client';
import {ArticleProvider,ClientProvider} from '../../providers/providers';

/**
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-edit',
  templateUrl: 'article-edit.html',
})
export class ArticleEditPage {

  item :Article;
  clients :Client[];
  // we can only use relationship Object not attibute client again another update 
  client :Client;
  client_id :number=0;

  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams,private articleProvider :ArticleProvider,private clientProvider :ClientProvider) {
    this.item = navParams.get('articleModal') || articleProvider.defaultArticle;
    this.client_id = this.item.client.id;
    }

  ionViewDidLoad() {
    this.assignClients();
  }

  assignClientToItem(id :any){
    this.clientProvider.queryById(id).subscribe(
      data => { this.client = data;
        this.item.client = this.client;
       },
      err => console.error(err), 
      () => console.log('getArticle completed') 
      );
  }
  
  assignClients(){
    this.clientProvider.query().subscribe(
      data => { this.clients = data;
       },
      err => console.error(err), 
      () => console.log('getClients completed') 
      );
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
  close(){
    //alert("id is "+this.client_id);
    this.assignClientToItem(this.client_id);
    this.viewCtrl.dismiss(this.item);
  }
}


