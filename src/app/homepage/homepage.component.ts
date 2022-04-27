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
  public nt: Note= new Note("", "","","");
  public note: Note = new Note("", "","","");
  public nts: Note[] = [];
  public val: Note[] = [];

  constructor(private http:DataserviceService,private _router : Router,private ntservice: NotesService) { 
    this.http.getBooks1().subscribe((response:any)=>{
      console.log(response),
      this.details=response.items;
    });
  }
  ngOnInit(): void {

    

  }
   onsearch(username:string) {
   
       this.http.searchbookdata(username).subscribe((response:any)=>{
         this.details=response.items;
         //this.title1="t.volumeInfo.title";
         console.log(this.details);
       });
   }
 


  public addFav(value1: string, value2: string,value3:string, value4:string) {
    this.nt = new Note("", "","","");
    this.nt.title = value1;
    this.nt.text = value2;
    this.nt.description = value3;
    this.nt.previewlink= value4;
    console.log(this.nt.title, typeof(this.nt.title));
    console.log(this.nt.text);
    console.log(this.nt.description);
    if (!this.nt.title && !this.nt.text && !this.nt.description && !this.nt.previewlink) {
     this.errMessage = 'Title and Text both are required fields';
     console.log(this.errMessage);
   }
    this.ntservice.addNote(this.nt).subscribe((data => this.note = data), (error => this.errMessage = error.message));
    
   }
   public addRec(value1: string, value2: string,value3:string, value4:string) {
    this.nt = new Note("", "","","");
    this.nt.title = value1;
    this.nt.text = value2;
    this.nt.description = value3;
    this.nt.previewlink= value4;
    console.log(this.nt.title, typeof(this.nt.title));
    console.log(this.nt.text);
    console.log(this.nt.description);
    if (!this.nt.title && !this.nt.text && !this.nt.description && !this.nt.previewlink) {
     this.errMessage = 'Title and Text both are required fields';
     console.log(this.errMessage);
   }
    this.ntservice.addNote1(this.nt).subscribe((data => this.note = data), (error => this.errMessage = error.message));
    
   }

   sumbitForm(form:any) {
  
    this.http.categoriesbook(form).subscribe((response:any)=>{
      this.details=response.items;
      console.log(this.details);
    });

  }
  options = ["Art", "Comedy", "Science","Fiction"];
optionSelected: any;

onOptionsSelected(event: any){
 console.log(event); //option value will be sent as event
 this.http.categoriesbook(event).subscribe((response:any)=>{
    this.details=response.items;
    console.log(this.details);
  });

}

  

}
