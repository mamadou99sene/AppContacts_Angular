import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../services/contact.service";
import {Contact} from "../../models/Contact";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public formLogin!:FormGroup;
  alertMessage: string="";
  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private router:Router,
              public appStateService: AppStateService) {
  }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      email: this.formBuilder.control("",[Validators.required,Validators.email]),
      password: this.formBuilder.control("" , [Validators.required])
    })
  }

  onLogin() {
    let email=this.formLogin.value.email;
    let password:string=this.formLogin.value.password;
    this.contactService.loginContact(email, password).
      then(
        (contact:Contact)=>{
          this.appStateService.setAuthentState({
            isAuthenticated:true,
            roles:contact.roles
          });
          this.router.navigateByUrl("/home/contacts");
        }
    ).catch(error=>{
        this.alertMessage="login or password incorrect !!!"
    })

  }
}
