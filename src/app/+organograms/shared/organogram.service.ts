import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'; 



@Injectable()
export class OrganogramService {
  public organogramsUri = '/organograms';


  constructor( private angularFire: AngularFire) {
    // this.organogramsRef = firebase.database().ref('/organograms');
    
  }

  getNew(){
    return {
      id: '',
      name: ''
    }
  }

  createOrganogram(organogram: any){
      //console.log(organogram);
      var organogramNode: FirebaseObjectObservable<any[]>;      
      organogramNode = this.angularFire.database.object('/organograms/'+organogram.id);
      return organogramNode.set(organogram);
  }

  getAllOrganograms(){
    return this.angularFire.database.list('/organograms');
  }

  getOrganogram(id){
    return this.angularFire.database.object('/organograms/' +id);
  }

}
