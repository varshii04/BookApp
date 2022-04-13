import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Favourite } from '../favourite';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public details: any[];
  public title1: string;
  favourite = new Favourite();

  constructor(private http:DataserviceService,private _router : Router) { }
  ngOnInit(): void {

    // this.http.searchbookdata().subscribe((response:any)=>{
    //   console.log(response);
    //    this.title1=response.items;
    //   console.log(this.title1);
    // });
    this.http.getBooks().subscribe((response:any)=>{
      console.log(response),
      this.details=response.items;
    });


  }
   onsearch(username:string) {
   
       this.http.searchbookdata(username).subscribe((response:any)=>{
         this.details=response.items;
         //this.title1="t.volumeInfo.title";
         console.log(this.details);
       });
   }
   addFav(){
    this.http.addFavList(this.favourite).subscribe(
      data =>{ console.log("response received");},
      _error => console.log("excepton occured")
      )
   }

  

}
