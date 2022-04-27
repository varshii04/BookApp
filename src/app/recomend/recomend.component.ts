import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-recomend',
  templateUrl: './recomend.component.html',
  styleUrls: ['./recomend.component.css']
})
export class RecomendComponent implements OnInit {

 
  public errMessage: string = "";
  public nts: Note[] = [];

  constructor(private ntservice:NotesService, private http:DataserviceService) { }

  // addForm: FormGroup;

  ngOnInit() {
    this.ntservice.getNotes1().subscribe((data => this.nts = data), (error => this.errMessage = error.message));

    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   title: ['', Validators.required],
    //   author: ['', Validators.required]
    // });

  }

}
