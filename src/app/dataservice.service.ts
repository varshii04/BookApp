import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Http } from '@angular/http';

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

}
