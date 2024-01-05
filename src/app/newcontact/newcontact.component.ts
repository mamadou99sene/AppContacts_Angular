import {Component, OnInit} from '@angular/core';
import { Contact } from 'src/models/Contact';
import { NewContactService } from '../services/new-contact.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit{

  isSubmitting:boolean=false;

  contact:Contact={id:0, prenom:"",nom:"",email:"",dateNaissance:undefined,photo:undefined,telephone:"",password:"", roles:""};
  ngOnInit() {
  }

  constructor(private newContactService:NewContactService){}
  onSaveContact(dataForm:Contact)
  {
    dataForm.roles="USER";
    this.isSubmitting=!this.isSubmitting;
    setTimeout(() => {
      this.newContactService.saveContact(dataForm).subscribe(
        {
          next:data=>{
            alert("Enregistrement effectué avec succées");
          },error:err => {
            console.log(err);
          }
        })
        this.contact=new Contact();
        this.isSubmitting=!this.isSubmitting;
    }, 5000);

  }

}
