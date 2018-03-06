import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Client} from '../../models/client';
import {ClientProvider} from '../../providers/providers';

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage {

  item:Client;
  clientIcon :string;
  articleIcon :string = "assets/img/article/article.gif";

  constructor(public navCtrl: NavController, public navParams: NavParams,private clientProvider :ClientProvider) {
    this.item = navParams.get('client') || clientProvider.defaultClient;
    this.clientIcon = navParams.get('clientIcon') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
  }

}
