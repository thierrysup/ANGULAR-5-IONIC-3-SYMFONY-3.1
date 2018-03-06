
import { Injectable } from '@angular/core';


import { Article } from '../../models/article';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleProvider {

  defaultArticle: Article = {
    "intitule": "ASUS 550LD",
    "nombre": 1,
    "client" :{
      "id": 1,
      "name":"thierrysup",
      "age":24
    }
  };

  constructor(public api: Api) {

  }


  query(): Observable<any>{
    return this.api.getItems('article');
  }

  queryById(id:any){
    return this.api.getItem('article',id);
  }

  update(article :Article){
    return this.api.updateItem("article",article)
  }

  add(article: Article) {
        return this.api.addItem("article",article);
  }

  delete(id: any) {
        return this.api.deleteItem("article",id);
  }

}
