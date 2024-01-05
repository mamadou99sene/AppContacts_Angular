import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
public unauthorizedMessage!:string;

  constructor() {
    this.unauthorizedMessage="Vous n'êtes pas authorizé à acceder à cette ressource !!!"

  }

}
