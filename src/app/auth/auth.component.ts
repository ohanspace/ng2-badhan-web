import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { LoginComponent } from './login';

@Routes([
  {
    path: '/login',
    component: LoginComponent
  }
])
@Component({
  moduleId: module.id,
  selector: 'badhan-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
