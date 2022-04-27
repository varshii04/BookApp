import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button'
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { BookComponent } from './book/book.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NotesService } from './notes.service';
import {MatCardModule} from '@angular/material/card';
import { RecomendComponent } from './recomend/recomend.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    BookComponent,
    RecomendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [DataserviceService,NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
