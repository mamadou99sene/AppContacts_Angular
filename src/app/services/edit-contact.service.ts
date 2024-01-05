import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Contact } from 'src/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  constructor(private http:HttpClient) { }
  getEditedContact(idContact:number)
  {
    return this.http.get<Contact>("http://localhost:8088/api/contacts/"+idContact).pipe(
      map(resp=>{
        return resp;
      })
    );
  }
  deleteContact(idContact:number)
  {
    return this.http.delete<boolean>("http://localhost:8088/api/contacts/"+idContact).pipe(
      map(resp=>
        {
          return resp;
        })
    )
  }
  updateContact(idContact: number, contact: Contact)
  {
    return this.http.put<Contact>("http://localhost:8088/api/contacts/"+idContact,contact). 
    pipe(
      map(resp=>
        {
          return resp;
        })
    )
  }
}
