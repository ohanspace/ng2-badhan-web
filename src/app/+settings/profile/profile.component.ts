import { Component, OnInit } from '@angular/core';
import { ControlGroup,Control, FormBuilder, Validators} from '@angular/common';

import { OrganogramSelectComponent } from '../../+organograms/shared/organogram-select.component';
import { UserService } from '../shared/user.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'profile',
  directives: [OrganogramSelectComponent],
  providers: [UserService],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  form: ControlGroup;
  memberSub: Subscription;
  memberPristine: FirebaseObjectObservable<any>;

  //form meta data
  bloodGroups: any[] = [{id: 'A+', name: 'A+'}, {id: 'A-', name: 'A-'}];
  districts: any[] = [{id: 'chittagong', name:'Chittagong'}, {id:'dhaka', name: 'Dhaka'}];
  

  constructor(private fb: FormBuilder, private userService: UserService) {
    
  }

  private buildForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      bloodGroup: [''],
      telephone: [],
      district: [],
      addressText: [],
      belongToOrganogram: []
    })
  }

  ngOnInit() {
    this.memberSub = this.userService.member$.subscribe(m => {
      this.memberPristine = m;
    });
   
    this.buildForm();
  }
  ngOnDestroy(){
    this.memberSub.unsubscribe();
  }

  save(){
    console.log(this.form.value);
    this.memberPristine.update(this.form.value);
    
  }

  onOrganogramSelect(organogram){
    (this.form.controls['belongToOrganogram'] as Control).updateValue(organogram.uniqueId);
  }

}
