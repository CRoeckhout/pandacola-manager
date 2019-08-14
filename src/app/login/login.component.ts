import { trigger, transition, animate, style } from '@angular/animations'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserApi } from '../utils/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'scaleY(0)'}),
        animate('200ms ease-in', style({transform: 'scaleY(1)'}))
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error : object;

  // constructor(private router: Router, private userApi: UserApi) { }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  connect () {
    this.error = undefined;
    this.router.navigate(['']);
    /* this.userApi.login({"email":this.email, "password": this.password}).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (error) => {
        this.error = error;
        console.log(error)
      }
    ) */
  }
}
