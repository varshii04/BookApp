import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Favourite } from '../favourite';
import { Note } from '../note';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public details: any[];
  public title1: string;
  favourite = new Favourite();
  books: Favourite[];
  panelOpenState = false;

  public errMessage: string = "";
  public nt: Note= new Note("", "");
  public note: Note = new Note("", "");
  public nts: Note[] = [];
  public val: Note[] = [];

  constructor(private http:DataserviceService,private _router : Router,private ntservice: NotesService) { 
    this.http.getBooks1().subscribe((response:any)=>{
      console.log(response),
      this.details=response.items;
    });
  }
  ngOnInit(): void {

    // this.http.searchbookdata().subscribe((response:any)=>{
    //   console.log(response);
    //    this.title1=response.items;
    //   console.log(this.title1);
    // });
    // this.http.getBooks1().subscribe((response:any)=>{
    //   console.log(response),
    //   this.details=response.items;
    // });
    // this._router.events.subscribe(value => {
    //   this.getBooks();
    // });


  }
   onsearch(username:string) {
   
       this.http.searchbookdata(username).subscribe((response:any)=>{
         this.details=response.items;
         //this.title1="t.volumeInfo.title";
         console.log(this.details);
       });
   }
  //  getBooks() {
  //   this.http.getBooks().subscribe(data => {
  //     this.books = data;
  //   });
  //}
  //  addFav(){
  //   this.http.addFavList(this.favourite).subscribe(
  //     data => console.log("response received"),
  //     _error => console.log("excepton occured")
  //     )
  //  }
  // addFav(): void {
  //   this._router.navigate(['book'])
  //     .then((e) => {
  //       if (e) {
  //         console.log("Navigation is successful!");
  //       } else {
  //         console.log("Navigation has failed!");
  //       }
  //     });
  // };
  // addFav(value1: string, value2: string)
  // {
  //   this.http.addFavList(this.favourite).subscribe(
  //     data =>{ console.log("response received");
  //     //this._router.navigate(['/book-component'])
  //   },
  //     _error => console.log("excepton occured")
  //     )
  
  // }


  public addFav(value1: string, value2: string) {
    this.nt = new Note("", "");
    this.nt.title = value1;
    this.nt.text = value2;
    console.log(this.nt.title, typeof(this.nt.title));
    console.log(this.nt.text);
    if (!this.nt.title && !this.nt.text) {
     this.errMessage = 'Title and Text both are required fields';
     console.log(this.errMessage);
   }
    this.ntservice.addNote(this.nt).subscribe((data => this.note = data), (error => this.errMessage = error.message));
    
   }

  

}
