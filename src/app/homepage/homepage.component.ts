import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public details: any[];
  public title1: string;

  constructor(private http:DataserviceService) { }
  ngOnInit(): void {

    // this.http.searchbookdata().subscribe((response:any)=>{
    //   console.log(response);
    //    this.title1=response.items;
    //   console.log(this.title1);
    // });


  }
   onsearch(username:string) {
   
       this.http.searchbookdata(username).subscribe((response:any)=>{
         this.details=response.items;
         //this.title1="t.volumeInfo.title";
         console.log(this.details);

       });
    
    
   }

  

}
