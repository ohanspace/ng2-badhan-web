import { Component, OnInit } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  directives: [AlertComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
