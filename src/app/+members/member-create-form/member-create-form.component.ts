import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IMember } from '../shared/member.model';

@Component({
  moduleId: module.id,
  selector: 'member-create-form',
  directives: [MODAL_DIRECTIVES],
  templateUrl: 'member-create-form.component.html',
})
export class MemberCreateFormComponent implements OnInit {
  @Output() createMember: EventEmitter<IMember> = new EventEmitter(false);

  form: ControlGroup;
  member: IMember;
  isResetting: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.fb.group({
       name: ['', Validators.required],
       address: this.fb.group({
         room: ['', Validators.required]
       })
    });
  }

  submit(): void {    
    this.member = {
      name: this.form.controls['name'].value,
      address: this.form.controls['address'].value
    }
    console.log(this.member);
    this.createMember.emit(this.member);
    this.onReset();
    
  }

  onReset(){
    this.buildForm();
    this.isResetting = true;
    setTimeout(() => this.isResetting = false, 0);
    return false;
  }

}
