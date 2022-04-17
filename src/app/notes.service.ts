import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { throws } from 'assert';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  //private url = 'http://localhost:27017/api/addBook';
  private postUrl = 'http://localhost:7091/addBook';
  private getUrl = 'http://localhost:7091/findAllBooks';
  constructor(private _http: HttpClient) { }
  // constructor(private http:HttpClient,) { }
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };
  getNotes(): Observable<Array<Note>> {
    return this._http.get<Note[]>(this.getUrl);
  }

  addNote(n: Note): Observable<Note> {
    return this._http.post<Note>(this.postUrl, n);

  }

}
