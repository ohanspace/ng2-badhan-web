import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { IOrganogram } from './organogram.model';


@Injectable()
export class OrganogramService {
  organogramItems$: FirebaseListObservable<IOrganogram[]>;

  constructor(private af: AngularFire) {
    this.organogramItems$ = this.af.database.list(`/organograms`) as FirebaseListObservable<IOrganogram[]>;
  }

  createOrganogram(organogram : IOrganogram): Promise<any> {
    console.log('firebase record creating...');
    return this.af.database
                  .object('/organograms/' + organogram.uniqueId)
                  .set(organogram)
    //return this.organogramItems$.push(new Organogram(organogram.uniqueId, organogram.name));
  }

  removeOrganogram(organogram: IOrganogram): Promise<any> {
    return this.organogramItems$.remove(organogram.$key);
  }

  updateOrganogram(organogram: IOrganogram, changes: any): Promise<any> {
    return this.organogramItems$.update(organogram.$key, changes);
  }

  getOrganogramItems(): FirebaseListObservable<IOrganogram[]>{
    return this.organogramItems$;
  }
}
