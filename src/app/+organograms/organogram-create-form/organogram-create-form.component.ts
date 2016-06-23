import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup,Control, Validators } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2';

import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IOrganogram } from '../shared/organogram.model';
import { OrganogramSelectComponent } from '../shared/organogram-select.component';

@Component({
  moduleId: module.id,
  selector: 'organogram-create-form',
  directives: [MODAL_DIRECTIVES, OrganogramSelectComponent],
  templateUrl: 'organogram-create-form.component.html',
})
export class OrganogramCreateFormComponent implements OnInit {
  @Output() createOrganogram: EventEmitter<IOrganogram> = new EventEmitter(false);

  form: ControlGroup;
  organogram: IOrganogram;
  isResetting: boolean = false;

  //form meta data
  organogramTypes: any[] = ['zone','unit','family'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.fb.group({
       uniqueId: ['', Validators.required],
       name: ['', Validators.required],
       type: ['', Validators.required],
       managedBy: ['', Validators.required]
       
    });
  }

  submit(): void {    
    this.organogram = this.form.value;
    this.createOrganogram.emit(this.organogram);
    this.onReset();  
  }

  onReset(){
    this.buildForm();
    this.isResetting = true;
    setTimeout(() => this.isResetting = false, 0);
    return false;
  }

  onSelectManagedBy(organogram: IOrganogram){
    (this.form.controls['managedBy'] as Control).updateValue(organogram.uniqueId);    
    
  }

}
