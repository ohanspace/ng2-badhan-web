import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { IMember } from '../shared/member.model';
import { MemberItemComponent } from '../member-item';


@Component({
  moduleId: module.id,
  selector: 'member-list',
  directives: [ROUTER_DIRECTIVES, MemberItemComponent],  
  template: `
    <div class="member-list">
      <h3>Member List</h3>
      <member-item
        *ngFor="let member of memberItems$ | async"
        [member]="member"
        (remove)="remove.emit(member)"
        (update)="update.emit({member: member, changes: $event})"></member-item>
    </div>

  `,
})
export class MemberListComponent implements OnInit {
  @Input() memberItems$: FirebaseListObservable<IMember[]>;
  @Output() remove: EventEmitter<IMember> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);  

  constructor() {}

  ngOnInit() {
  }

}
