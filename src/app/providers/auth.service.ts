import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { GoogleAuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
