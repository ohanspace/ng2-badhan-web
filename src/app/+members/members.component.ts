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

  constructor(private memberService: MemberService) {}

  ngOnInit() {
  }

}
