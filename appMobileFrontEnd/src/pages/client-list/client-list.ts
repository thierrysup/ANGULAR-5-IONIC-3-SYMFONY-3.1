import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';


import { Client } from '../../models/client';
import { ClientProvider } from '../../providers/providers';

/**
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {

 
  currentClients: Client[] ;
  clientIcon :string = "assets/img/client/client.png";

  constructor(public navCtrl: NavController, public clientProvider: ClientProvider, public modalCtrl: ModalController) {
    //this.currentClients = this.clientProvider.query();
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientListPage');
    this.getAllClient();
  }

    getAllClient(){
      this.clientProvider.query().subscribe(
        data => { this.currentClients = data;
  // this.currentClients = Array.of(this.currentClients); 
         },
        err => console.error(err), 
        () => console.log('getClients completed') 
        );
    }

  addClient() {
    let addModal = this.modalCtrl.create('ClientCreatePage');
    addModal.onDidDismiss(client => {
      console.log('hello boy ...');
      if (client) {
        this.clientProvider.add(client).subscribe(
          data => {  
            console.log('Your client had been save ...');
           },
          err => console.error(err), 
          () => console.log('getClients completed') 
          );
      }
      this.ionViewDidLoad();
    })
    addModal.present();
  
  }

  updateClient(client:Client) {
    let addModal = this.modalCtrl.create('ClientEditPage',{
      clientModal: client
    });
    addModal.onDidDismiss(client => {
      console.log('hello boy ...');
      if (client) {
        this.clientProvider.update(client).subscribe(
          data => {  
            console.log('Your client had been updated ...');
           },
          err => console.error(err), 
          () => console.log('getClients completed') 
          );
      }
      this.ionViewDidLoad();
    })
    addModal.present();
  
  }


  /**
   * Delete an client from the list of clientProvider.
   */
  deleteClient(client:Client) {
      this.clientProvider.delete(client.id).subscribe((res: any) => {
        // If the API returned a successful response,
          console.log('Your client had been deleted ...');
      }, err => {
        console.error('ERROR', err);
      });
      this.ionViewDidLoad();
    
  }

  /**
   * Navigate to the detail page for this client.
   */
  openClient(client: Client) {
    this.navCtrl.push('ClientDetailPage', {
      client: client, clientIcon : this.clientIcon
    });
  }

}
