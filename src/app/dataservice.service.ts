import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  api=`https://www.googleapis.com/books/v1/volumes`;
  apikey=`AIzaSyCNRXTLULEEzYlFC7sQlbDKSZcaneX0fQY`;

   constructor(private _http: HttpClient) { }



  //  searchbookdata(){
  //    return this._http.get(`${this.api}?q=:keyes&key=${this.apikey}`);
  // }

  searchbookdata(bookname:any)
  {
    return this._http.get(`${this.api}?q=${bookname}:keyes&key=${this.apikey}+&maxResults=40`);

 }
 getBooks() {
  return this._http.get(`${this.api}?q=:keyes&key=${this.apikey}+&limit=10`);
}
public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:8092/login",user)
}

}
