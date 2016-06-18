import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { OrganogramListComponent } from './organogram-list';
import { OrganogramComponent } from './organogram';
import { OrganogramFormComponent } from './organogram-form';

@Routes([
  {
    path: '/',
    component: OrganogramListComponent
  },
  {
    path: '/new',
    component: OrganogramFormComponent 
  },
  {
    path: '/edit/:id',
    component: OrganogramFormComponent 
  },
  {
    path: '/:id',
    component: OrganogramComponent
  }

])
@Component({
  moduleId: module.id,
  selector: 'badhan-organograms',
  templateUrl: 'organograms.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class OrganogramsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
