import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router';

import { OrganogramService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'badhan-organogram-form',
  templateUrl: 'organogram-form.component.html',
  styleUrls: ['organogram-form.component.css'],
  providers: [OrganogramService]
})
export class OrganogramFormComponent implements OnInit {
  form: ControlGroup;
  organogram : any;

  constructor(formBuilder: FormBuilder, 
              private organogramService: OrganogramService,
              private router: Router) {
      this.form = formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required]
      });

      this.organogram = this.organogramService.getNew();
  }

  ngOnInit() {
  }

  save(){
    var result: any ;
    result = this.organogramService.createOrganogram(this.organogram);
    result.then(res => {
      //console.log(res);
      this.router.navigate(['/organograms']);

    })
  }

}
