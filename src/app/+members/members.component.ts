import { Component, OnInit } from '@angular/core';

import { MemberListComponent } from './member-list';
import { MemberService } from './shared/member.service';
import { MemberCreateFormComponent } from './member-create-form';

@Component({
  moduleId: module.id,
  selector: 'badhan-members',
  directives: [ MemberListComponent, MemberCreateFormComponent], 
  providers: [MemberService], 
  template: `
    <select [(ngModel)]="selectedOrganogram" (ngModelChange)="onOrganogramChange()">
      <option [ngValue]="organogram" *ngFor="let organogram of organograms">{{organogram.name}}</option>
    </select>
    <div class="row">
      <div class="col-md-6">
        <member-create-form (createMember) = "memberService.createMember($event)"></member-create-form>
      </div>

      <div class="col-md-6">
        <member-list 
          [memberItems$]="memberService.memberItems$"
          (remove)="memberService.removeMember($event)"
          (update)="memberService.updateMember($event.task, $event.changes)"></member-list>
      </div>
    </div>
  `,
})
export class MembersComponent implements OnInit {
  selectedOrganogram: any;
  organograms: any[] = [{name: 'a'}, {name:'b'}];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
  }

  onOrganogramChange(){
    console.log(this.selectedOrganogram);
  }

}
