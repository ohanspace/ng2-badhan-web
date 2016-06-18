import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar'

@Component({
  moduleId: module.id,
  selector: 'badhan-header',
  templateUrl: 'header.component.html',
  directives: [NavbarComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
