import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'login';
  user = new User();
  constructor(private reg:FormBuilder, private _service:DataserviceService,private _router : Router){}
  loginform=this.reg.group({
      password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
      emailid:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  })
    
    get password(){
      return this.loginform.get('password');
    }
    
    get emailid(){
      return this.loginform.get('emailid');
    }
    

  ngOnInit(): void {
  }
  loginUser(loginForm:any)
  {
    console.log(loginForm);
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{ console.log("response received");
      this._router.navigate(['/homepage-component'])},
      _error => console.log("excepton occured")
      )
  
  }
  gotoRegister()
  {
    this._router.navigate(['/registration-component']);
  }

}
