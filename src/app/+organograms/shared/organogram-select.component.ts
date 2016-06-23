import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { IOrganogram } from './organogram.model';
import { OrganogramService } from './organogram.service';

@Component({
    moduleId: module.id,
    selector: 'organogram-select',
    providers: [OrganogramService],
    template: ` 
          <select class="form-control" 
                [(ngModel)]= "selectedOrganogram" 
                (ngModelChange)="onChange()">
              <option *ngFor="let organogram of organogramItems$ | async" 
                    [ngValue]="organogram">{{organogram.name}}</option>
          </select>
    `
})
export class OrganogramSelectComponent implements OnInit {
    @Output() organogramSelected: EventEmitter<IOrganogram> = new EventEmitter();

    organogramItems$: FirebaseListObservable<IOrganogram[]>; 
    selectedOrganogram: IOrganogram;

    constructor(private organogramService: OrganogramService) {
        this.organogramItems$ = organogramService.getOrganogramItems();
     }

    ngOnInit() { }
    onChange(){
        this.organogramSelected.emit(this.selectedOrganogram);   
    }

}

