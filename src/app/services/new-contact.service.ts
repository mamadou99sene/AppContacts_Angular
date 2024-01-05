import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class NewContactService {
  private urlApi:string="http://localhost:8088/api/contacts"

  constructor(private http:HttpClient) { }
  saveContact(contact:Contact)
  {
    return this.http.post<Contact>(this.urlApi,contact);
  }
}
