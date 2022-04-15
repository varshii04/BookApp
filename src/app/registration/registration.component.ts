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
      password:['',[Validators.required,Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^\w\s]).{8,}$/)]],
      confirmpassword:['',[Validators.required,Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^\w\s]).{8,}$/)]],
      emailid:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phonenumber:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]]




      
    })
    get name(){
      return this.registrationForm.get('name');
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

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { DataserviceService } from '../dataservice.service';
// import { Register } from '../register';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {

//   register = new Register();
//   title = 'registration';
//   //msg: any;

//   constructor(private reg:FormBuilder, private _service:DataserviceService,private _router : Router){}
//   registrationForm=this.reg.group({
//       password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
//       email:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
//       name:['',[Validators.required,Validators.pattern(/[a-zA-Z][a-zA-Z ]/)]],
//       phone:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],

//   })
    
//     get password(){
//       return this.registrationForm.get('password');
//     }
    
//     get email(){
//       return this.registrationForm.get('email');
//     }
//     get phone(){
//       return this.registrationForm.get('phone');
//     }
//     get name(){
//       return this.registrationForm.get('name');
//     }
    

//   ngOnInit(): void {
//   }
//   registerUser(registrationForm:any)
//   {
//     console.log(registrationForm);
//     this._service.registerUserFromRemote(this.register).subscribe(
//       data =>{ console.log("response received");
//       this._router.navigate(['/login-component'])},
//       _error => console.log("excepton occured")
//       )
  
//   }
 
//     // registrationForm=this.reg.group({
//     //   Name1:['',[Validators.required,Validators.pattern(/[a-zA-Z][a-zA-Z ]/)]],
//     //   //password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
//     //   //confirmpassword:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
//     //   emailid:['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
//     //   phonenumber:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
//     //   password:['']




      
//     // })
//     // get name(){
//     //   return this.registrationForm.get('Name1');
//     // }
//     // get password(){
//     //   return this.registrationForm.get('password');
//     // }
    
//     // get email(){
//     //   return this.registrationForm.get('emailid');
//     // }
//     // get phone(){
//     //   return this.registrationForm.get('phonenumber');
//     // }

//   // ngOnInit(): void {
//   // }
//   // registerUser()
//   // {
//   //   this._service.registerUserFromRemote().subscribe(
//   //     _data=>{
//   //         console.log("response received");
//   //         this._router.navigate(['/login-component'])
//   //     },
//   //     error=>{
//   //       console.log("exception ocurred");
//   //       this.msg=error.error;
//   //     }
//   //   )
//   // }
  
  

// }
