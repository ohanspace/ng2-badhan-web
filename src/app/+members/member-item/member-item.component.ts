import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IMember } from '../shared/member.model';

@Component({
  moduleId: module.id,
  selector: 'member-item',
  template: `
    <p>{{member.name}}</p>
  `
})
export class MemberItemComponent implements OnInit {
  @Input() member: IMember;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);


  constructor() {}

  ngOnInit() {
  }

}
