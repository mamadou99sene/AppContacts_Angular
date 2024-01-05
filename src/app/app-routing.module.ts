import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";
import {AuthorizationGuard} from "./guards/authorization.guard";

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent,canActivate:[AuthentificationGuard], children:
      [
        {path :"contacts",component:ContactComponent},
        {path:"edit/:id", component:EditContactComponent, canActivate:[AuthorizationGuard]},
        {path:"new", component: NewcontactComponent,canActivate:[AuthorizationGuard]},
        {path:"unauthorized", component: UnauthorizedComponent}
      ]},

  {path: "", redirectTo:"/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
