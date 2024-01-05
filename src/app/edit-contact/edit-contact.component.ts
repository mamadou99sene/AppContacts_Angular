import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditContactService } from '../services/edit-contact.service';
import { Contact } from 'src/models/Contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact:Contact=new Contact();
  idContact:number=0;
  isUpdating:boolean=false;
  mode:number=0;

  constructor(private activedRoute:ActivatedRoute,
     private editcontactService:EditContactService, private router:Router){
    this.idContact=activedRoute.snapshot.params['id'];
    console.log(this.idContact);
  }

  ngOnInit(): void {
    this.onGetContactEdited();
  }

  onGetContactEdited()
  {
    this.editcontactService.getEditedContact(this.idContact).subscribe(data=>{
      this.contact=data;

    });
  }
  onDeleteEditingContact(idContact:number)
  {
    let response=window.confirm("voulez vous vraiment supprimer le contact numero "+idContact);
    if(response)
    {
      this.editcontactService.deleteContact(idContact).subscribe(data=>{
      })

      this.router.navigate(["/contacts"]);
    }
  }
  onGetUpdatedContact(id:number)
  {
    id=this.idContact;
    this.editcontactService.getEditedContact(id).subscribe(data=>{
      this.contact=data;
      this.mode=1;
    })
  }
  onUpdateContact(dataForm:Contact)
  {
    this.editcontactService.updateContact(this.idContact,dataForm).subscribe(
      data=>{
        this.contact=data;
        this.mode=0;
      }, error=>
      {
        console.log(error);
      }
    )
    console.log(this.contact);
  }

}
