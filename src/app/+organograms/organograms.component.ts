import { Component, OnInit } from '@angular/core';

import { OrganogramListComponent } from './organogram-list';
import { OrganogramService } from './shared/organogram.service';
import { OrganogramCreateFormComponent } from './organogram-create-form';

@Component({
  moduleId: module.id,
  selector: 'badhan-organograms',
  directives: [ OrganogramListComponent, OrganogramCreateFormComponent], 
  providers: [OrganogramService], 
  template: `
    <div class="row">
      <div class="col-md-6">
        <organogram-create-form (createOrganogram) = "organogramService.createOrganogram($event)"></organogram-create-form>
      </div>

      <div class="col-md-6">
        <organogram-list 
          [organogramItems$]="organogramService.organogramItems$"
          (remove)="organogramService.removeOrganogram($event)"
          (update)="organogramService.updateOrganogram($event.task, $event.changes)"></organogram-list>
      </div>
    </div>
  `,
})
export class OrganogramsComponent implements OnInit {

  constructor(private organogramService: OrganogramService) {}

  ngOnInit() {
  }



}
