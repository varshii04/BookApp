import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'registration';
  constructor(private reg:FormBuilder){}
    registrationForm=this.reg.group({
      Name1:['',[Validators.required,Validators.pattern(/[a-zA-Z][a-zA-Z ]/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
      confirmpassword:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
      emailid:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phonenumber:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]]




      
    })
    get Name1(){
      return this.registrationForm.get('Name1');
    }
    get password(){
      return this.registrationForm.get('password');
    }
    get confirmpassword(){
      return this.registrationForm.get('confirmpassword');
    }
    get emailid(){
      return this.registrationForm.get('emailid');
    }
    get phonenumber(){
      return this.registrationForm.get('phonenumber');
    }

  ngOnInit(): void {
  }

}
