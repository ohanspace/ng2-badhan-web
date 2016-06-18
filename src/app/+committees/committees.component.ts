import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { CommitteeComponent } from './committee';
import { CommitteeCreateComponent } from './committee-create';

@Routes([
  {
    path: '/manage/:organogramId',
    component: CommitteeCreateComponent
  },
  {
    path: '/:id',
    component: CommitteeComponent
  }
  
])
@Component({
  moduleId: module.id,
  selector: 'badhan-committees',
  templateUrl: 'committees.component.html',
  styleUrls: ['committees.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class CommitteesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
