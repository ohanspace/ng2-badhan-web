import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES }  from '@angular/router';

import { ProfileComponent } from './profile';

@Routes([
  {
    path: '/profile',
    component: ProfileComponent
  }
])
@Component({
  moduleId: module.id,
  selector: 'settings',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'settings.component.html',
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
