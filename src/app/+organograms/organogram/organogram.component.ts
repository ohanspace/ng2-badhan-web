import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';

import { OrganogramService } from '../shared/organogram.service';

@Component({
  moduleId: module.id,
  selector: 'badhan-organogram',
  templateUrl: 'organogram.component.html',
  styleUrls: ['organogram.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [OrganogramService]
})

export class OrganogramComponent implements OnInit {
  organogram: FirebaseObjectObservable<any>;

  constructor(private organogramService: OrganogramService,
              private routeSegment: RouteSegment) {

  }

  ngOnInit() {
    var id = this.routeSegment.getParam('id');
    this.organogram = this.organogramService.getOrganogram(id);    
  }

}
