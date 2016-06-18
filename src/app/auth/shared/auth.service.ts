import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods  } from 'angularfire2'; 


@Injectable()
export class AuthService {
  private authState: FirebaseAuthData | FirebaseAuthState;

  constructor( private auth$: FirebaseAuth) {
  //  / this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      console.log(this.authState); 
    });    
  }

  get expired(): boolean {
    return !this.authState || (this.authState.expires * 1000) < Date.now();
  }
  
  get authenticated(): boolean {
    return this.authState !== null && !this.expired;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signInWithGoogle(): Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google
    });
  }

  signOut(): void {
    this.auth$.logout();
  }

}
