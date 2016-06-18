import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class CommitteeService {

  constructor(private angularFire: AngularFire) {}

 
  getNewMember(){
    return {
      name: ''
    }
  }

  getCommitteeMembers(organogramId, year){
    //console.log(year);
    return this.angularFire.database.list('/committees/'+organogramId + '/'+ year + '/members');
    
  }

  addMember(organogramId, year,member){
    return this.angularFire.database.list('/committees/'+organogramId + '/'+ year + '/members').push(member);
  }

}
