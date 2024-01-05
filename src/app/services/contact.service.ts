import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,catchError} from 'rxjs/operators';
import { Contact } from 'src/models/Contact';
import {firstValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private urlApi="http://localhost:8088";
  private totalePage:number=0;
  constructor(private http:HttpClient) { }
   getAllContacts(currentPage:number)
  {
    return this.http.get<Contact[]>(this.urlApi+"/api/contacts?page="+currentPage+"&size=5").pipe
    (map((resp:any)=>
      {
        this.totalePage=resp.page.totalPages;
        return resp._embedded.contacts;
      }));
  }
  getContacts() {
    return this.http.get<any>(this.urlApi+"/api/contacts").pipe(
      map((res: any) => {
          return res._embedded.contacts;
      }),
    );
  }
  getTotalPages():number
  {
    return this.totalePage;
  }

  searchContact(prenom:string)
  {
    return this.http.get<Contact[]>(this.urlApi+"/api/contacts/search/byPrenom?q="+prenom)
    .pipe(
      map((resp:any)=>
        {
          return resp._embedded.contacts
        })
    )
  }
  async loginContact(email:string, password:string)
  {
    return await firstValueFrom(this.http.post<Contact>(this.urlApi+"/rs/contacts/login/"+email+"/"+password,null));
  }
}
