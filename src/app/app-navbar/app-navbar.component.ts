import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { Observable } from '@firebase/util';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
  providers: [AuthService]
})
export class AppNavbarComponent implements OnInit {
  loginUser: AngularFireAuth;
  constructor(public authService: AuthService) { }
  

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.login();
    this.loginUser = this.authService.afAuth;
  }

  logout() {
    this.authService.logout();
    this.loginUser = null;
  }
}
