import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IOrganogram } from '../shared/organogram.model';

@Component({
  moduleId: module.id,
  selector: 'organogram-item',
  template: `
    <p>{{organogram.uniqueId}} -- {{organogram.name}}</p>
  `
})
export class OrganogramItemComponent implements OnInit {
  @Input() organogram: IOrganogram;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);


  constructor() {}

  ngOnInit() {
  }

}
