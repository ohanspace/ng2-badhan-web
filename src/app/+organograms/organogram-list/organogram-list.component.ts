import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { IOrganogram } from '../shared/organogram.model';
import { OrganogramItemComponent } from '../organogram-item';


@Component({
  moduleId: module.id,
  selector: 'organogram-list',
  directives: [ROUTER_DIRECTIVES, OrganogramItemComponent],  
  template: `
    <div class="organogram-list">
      <h3>Organogram List</h3>
      <organogram-item
        *ngFor="let organogram of organogramItems$ | async"
        [organogram]="organogram"
        (remove)="remove.emit(organogram)"
        (update)="update.emit({organogram: organogram, changes: $event})"></organogram-item>
    </div>

  `,
})
export class OrganogramListComponent implements OnInit {
  @Input() organogramItems$: FirebaseListObservable<IOrganogram[]>;
  @Output() remove: EventEmitter<IOrganogram> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);  

  constructor() {}

  ngOnInit() {
  }

}
