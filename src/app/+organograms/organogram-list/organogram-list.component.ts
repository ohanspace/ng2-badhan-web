import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { OrganogramService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'badhan-organogram-list',
  templateUrl: 'organogram-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [OrganogramService]
})
export class OrganogramListComponent implements OnInit {
  
  organograms: FirebaseListObservable<any[]>;
  
  constructor(private organogramService: OrganogramService) {
     
  }

  ngOnInit() {
   this.organograms = this.organogramService.getAllOrganograms(); 
  }

  delete($key){
    if(confirm("ary you sure delete this??")){
      this.organograms.remove($key);
    }
    
  }

}
