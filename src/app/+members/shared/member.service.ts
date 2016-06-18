import 'rxjs/add/operator/map';
import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../../auth/shared/auth.service';
import { IMember, Member } from './member.model';


@Injectable()
export class MemberService {
  memberItems$: FirebaseListObservable<IMember[]>;

  constructor(af: AngularFire) {
    this.memberItems$ = af.database.list(`/members/buet-swh-unit`) as FirebaseListObservable<IMember[]>;
  }

  createMember(member : IMember): Promise<any> {

    return this.memberItems$.push(new Member(member.name));
  }

  removeMember(member: IMember): Promise<any> {
    return this.memberItems$.remove(member.$key);
  }

  updateMember(member: IMember, changes: any): Promise<any> {
    return this.memberItems$.update(member.$key, changes);
  }
}
