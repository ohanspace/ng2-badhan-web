import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  member$: Observable<any>;

  constructor(private af: AngularFire) {
    this.member$ = af.auth.map(a => af.database.object('/members/'+a.uid));
  }

  getMember() {
    return this.member$
  }

  updateMember(member){
    //this.member$.update(member);
  }




}
