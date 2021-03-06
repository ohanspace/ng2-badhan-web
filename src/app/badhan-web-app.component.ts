import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { FooterComponent } from './shared/footer';
import { HeaderComponent } from './shared/header';
import { HomeComponent } from './home';
import { OrganogramsComponent } from './+organograms';
import { AuthComponent } from './auth';
import { MembersComponent } from './+members';
import { CommitteesComponent } from './+committees';
import { SettingsComponent } from './+settings';

@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/settings',
    component: SettingsComponent
  },
  {
    path: '/organograms',
    component: OrganogramsComponent //Component Router
  },
  {
    path: '/auth',
    component: AuthComponent //component router
  },
  {
    path: '/members',
    component: MembersComponent  //component router
  },
  {
    path: '/committees',
    component: CommitteesComponent  //component router
  }
])
@Component({
  moduleId: module.id,
  selector: 'badhan-web-app',
  templateUrl: 'badhan-web-app.component.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
})
export class BadhanWebAppComponent {
  
  constructor(private router: Router) {
  }
  
}
