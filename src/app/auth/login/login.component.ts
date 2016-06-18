import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service'
@Component({
  moduleId: module.id,
  selector: 'badhan-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {  }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  private postSignIn() : void {
    this.router.navigate(['/']);
  }

}
