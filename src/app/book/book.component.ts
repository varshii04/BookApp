import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public errMessage: string = "";
  public nts: Note[] = [];

  constructor(private ntservice:NotesService, private http:DataserviceService) { }

  // addForm: FormGroup;

  ngOnInit() {
    this.ntservice.getNotes().subscribe((data => this.nts = data), (error => this.errMessage = error.message));

    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   title: ['', Validators.required],
    //   author: ['', Validators.required]
    // });

  }

  // onSubmit() {
  //   this.http.addBook(this.addForm.value)
  //     .subscribe(data => {
  //       // this.router.navigate(['homepage']);
  //       console.log("receiving")
  //     });
  // }


}
