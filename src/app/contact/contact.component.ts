import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { EditContactService } from '../services/edit-contact.service';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{


  constructor(private contactService: ContactService,
              private router: Router,
              private editContactService:EditContactService,
              public appStateService:AppStateService){ }

    ngOnInit(): void {
      this.getAllcontact();

    }
  getAllcontact()
  {
    this.contactService.getAllContacts(this.appStateService.contactState.currentPage).subscribe(
      {
        next:(data) => {
          this.appStateService.contactState.contacts = data;
          this.appStateService.contactState.totalPages=this.contactService.getTotalPages();
          this.appStateService.contactState.pages=new Array(this.appStateService.contactState.totalPages);
          console.log("données de la page "+this.appStateService.contactState.currentPage);
        },
        error:err => {
          console.log("une erreur s'est produite");
        }
      })


  }
  goToPage(i:number)
  {
    this.appStateService.contactState.currentPage=i;
    this.getAllcontact();
  }
  editerConctact(id:number)
  {
    console.log("edition");
    //this.router.navigate(["/edit",id])
    this.router.navigateByUrl('/home/edit/'+id);
  }
  ondeletedContact(idContact:number)
  {
    let confim=window.confirm("voulez vous supprimer le contact numero "+idContact);
    if(confim)
    {
      this.editContactService.deleteContact(idContact).subscribe(data=>{
        console.log(data);
      });
      this.getAllcontact();
    }

  }

  onSeach(dataForm:any)
  {
    this.contactService.searchContact(dataForm.terme)
    .subscribe(data=>
      {
        this.appStateService.contactState.contacts=data;
      })
  }


}
