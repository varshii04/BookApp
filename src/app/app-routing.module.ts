import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent ,
  
    children: [
      {
        path:'homepage-component',
        component: HomepageComponent
      }
    ]},
  { path: 'homepage-component', component: HomepageComponent },
  { path: 'registration-component', component: RegistrationComponent },
  {path: 'book', component: BookComponent},
  { path: '',   redirectTo: '/homepage-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }