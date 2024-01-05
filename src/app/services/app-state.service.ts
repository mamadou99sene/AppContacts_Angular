import { Injectable } from '@angular/core';
import {Contact} from "../../models/Contact";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public contactState:any= {
    contacts:[],
    currentPage:0,
    totalPages:0,
    pages:[],
    motCle:""
  }

  public authentState:any={
    isAuthenticated:false,
    roles:""
  }
public setContactState(state:any)
{
  this.contactState={...this.contactState,...state};
}
public setAuthentState(state:any)
{
  this.authentState={...this.authentState,...state}
}
  constructor() { }
}
