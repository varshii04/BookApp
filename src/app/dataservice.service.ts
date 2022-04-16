import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from './user';
import { Favourite } from './favourite';
import { Register } from './register';

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
 getBooks1() {
  return this._http.get(`${this.api}?q=:keyes&key=${this.apikey}+&maxResults=21`);
}
public loginUserFromRemote(user:User):Observable<any>{
  
  return this._http.post<any>("http://localhost:7090/login", user)
}
public registerUserFromRemote(register:Register):Observable<any>{
  return this._http.post<any>("http://localhost:7090/registeruser",register)
}

// public addFavList(favourite:Favourite):Observable<any>{
//   return this._http.post<any>("http://localhost:8089/favlist",favourite);
// }
 // url = 'http://localhost:8089/favlist/';

  

  // getBooks(): Observable<any> {
  //   return this._http.get(`${this.url}`);
  // }

  // addBook(book: Object): Observable<Object> {
  //   return this._http.post(`${this.url}`, book);
  // }

  categoriesbook(bookname1:any)
   {
      return this._http.get(`${this.api}?q=subject:+${bookname1}:keyes&key=${this.apikey}+&maxResults=21`);
  }

}




