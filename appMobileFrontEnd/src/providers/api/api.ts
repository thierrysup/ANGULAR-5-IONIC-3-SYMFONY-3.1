import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageServiceProvider  } from '../message-service/message-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                              'Access-Control-Allow-Methods':'*',
                              'Access-Control-Allow-Origin':'*',
                              'Access-Control-Allow-Headers':'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding'})
};

@Injectable()
export class Api {

  private baseUrl ='/api/';// URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageServiceProvider ) { }

  /** GET Items from the server */
  getItems (endpoint: string): Observable<any[]> {
    const url = `${this.baseUrl}${endpoint}/`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(items => this.log(`fetched ${endpoint}s`)),
        catchError(this.handleError(`get${endpoint}s`, []))
      );
  }

  /** GET Item by id. Return `undefined` when id not found */
  getItemNo404<Data>(endpoint: string,id: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}/?id=${id}`;
    return this.http.get<any[]>(url)
      .pipe(
        map(Items => Items[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} ${endpoint} id=${id}`);
        }),
        catchError(this.handleError<any>(`get${endpoint} id=${id}`))
      );
  }

  /** GET Item by id. Will 404 if id not found */
  getItem(endpoint :string,id: any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched ${endpoint} id=${id}`)),
      catchError(this.handleError<any>(`get${endpoint} id=${id}`))
    );
  }
  /* GET Items whose name contains search term */
  searchItemes(endpoint :string,term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty Item array.
      return of([]);
    }
    const url = `${this.baseUrl}${endpoint}/${term}`;
    return this.http.get<any[]>(url).pipe(
      tap(_ => this.log(`found ${endpoint}s matching "${term}"`)),
      catchError(this.handleError<any[]>(`search ${endpoint}s`, []))
    );
  }

  //////// Save methods //////////
  /** POST: add a new Item to the server */
  addItem (endpoint :string,Item: any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}/new`;
    return this.http.post<any>(url, Item, httpOptions).pipe(
      tap((Item: any) => this.log(`added ${endpoint} w/ id=${Item.id}`)),
      catchError(this.handleError<any>(`add${endpoint}`))
    );
  }

/** POST: signup or loggin  a new User  to the server */
  loginAndSignup(endpoint: string, body: any):Observable<any> {
    const url = `${this.baseUrl}${endpoint}/`;
    return this.http.post<any>(url, body, httpOptions).pipe(
      tap((Item: any) => this.log(`user ${endpoint} w/ id=${Item.id}`)),
      catchError(this.handleError<any>(`user ${endpoint}`))
    );
  }


  /** DELETE: delete the Item from the server */
  deleteItem (endpoint :string,id:any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}/${id}`;
    return this.http.delete<any>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted ${endpoint} id=${id}`)),
      catchError(this.handleError<any>(`delete${endpoint}`))
    );
  }

  /** PUT: update the Item on the server */
  updateItem (endpoint :string,Item: any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}/${Item.id}/edit`;
    return this.http.put(url, Item, httpOptions).pipe(
      tap(_ => this.log(`updated ${endpoint} id=${Item._id}`)),
      catchError(this.handleError<any>(`update${endpoint}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ItemService message with the MessageServiceProvider  */
  private log(message: string) {
    this.messageService.add('ItemService: ' + message);
  }
}