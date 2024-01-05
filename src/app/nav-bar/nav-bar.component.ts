import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
constructor(public appStateService: AppStateService, private router:Router) {
}

  logout() {
    this.appStateService.setAuthentState(
      {
        isAuthenticated:false,
        roles:""
      }
    );
    this.router.navigateByUrl("/login");
  }

  login() {
    this.router.navigateByUrl("/login");
  }
}
