import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { RouteSegment } from '@angular/router';

import { CommitteeService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'badhan-committee-create',
  templateUrl: 'committee-create.component.html',
  styleUrls: ['committee-create.component.css'],
  providers: [CommitteeService]
})
export class CommitteeCreateComponent implements OnInit {
  form: ControlGroup;
  organogramId: string;
  committeeYear: string;
  committeeMembers: any;
  newMember: any;


  constructor(private committeeService: CommitteeService,
              private formBuilder: FormBuilder,
              private routeSegment: RouteSegment) {
              
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      committeeYear: ['', Validators.required],
      newMember: this.formBuilder.group({
        name: ['', Validators.required]
      })
    });
    this.organogramId = this.routeSegment.getParam('organogramId');
    this.committeeYear = '';
    this.newMember = {name: ''};
  }

  onYearChange(){
    this.committeeMembers = this.committeeService.getCommitteeMembers(this.organogramId, this.committeeYear);
    this.committeeMembers.subscribe(res => console.log(res));
  }
  
  addMember(){
    console.log(this.newMember);
    this.committeeService.addMember(this.organogramId, this.committeeYear, this.newMember);
    this.newMember = {name: ''};
  }

  save(){
    
  
  }

}
