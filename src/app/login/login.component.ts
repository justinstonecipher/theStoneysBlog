import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.login();
  }

}
