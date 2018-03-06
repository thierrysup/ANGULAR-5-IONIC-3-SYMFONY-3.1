import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';


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
  selector: 'page-client-edit',
  templateUrl: 'client-edit.html',
})
export class ClientEditPage {

  item:Client;

  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams,private clientProvider :ClientProvider) {
    this.item = navParams.get('clientModal') || clientProvider.defaultClient;
  }

  ionViewDidLoad() {

  }


  cancel(){
    this.viewCtrl.dismiss();
  }
  close(){
    this.viewCtrl.dismiss(this.item);
  }
}
