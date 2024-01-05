import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { NewcontactComponent } from './newcontact/newcontact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewContactService } from './services/new-contact.service';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewcontactComponent,
    EditContactComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService, NewContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
