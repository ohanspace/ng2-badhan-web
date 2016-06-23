import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class StaticDataService {
  private baseLocation: string = '/staticData/';

  constructor(private af: AngularFire) {
  }

  getItem(key: string): FirebaseObjectObservable<any>{
      return this.af.database.object(this.baseLocation + key) as FirebaseObjectObservable<any>;
  }
  getItems(key: string): FirebaseListObservable<any[]>{
    return this.af.database.list(this.baseLocation + key) as FirebaseListObservable<any[]>;
  }
}
