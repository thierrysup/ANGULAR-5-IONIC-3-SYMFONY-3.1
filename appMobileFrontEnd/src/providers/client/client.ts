import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Client } from '../../models/client';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientProvider {

  defaultClient: Client = {
    "name": "john west",
    "age": 21
  };

  constructor(public api: Api,private http :HttpClient) {

  }

  query(): Observable<any>{
    return this.api.getItems('client');
  }

  queryById(id:any){
    return this.api.getItem('client',id);
  }

  update(client :Client){
    return this.api.updateItem("client",client)
  }

  add(client: Client) {
        return this.api.addItem("client",client);
  }

  delete(id: any) {
        return this.api.deleteItem("client",id)
  }

}
