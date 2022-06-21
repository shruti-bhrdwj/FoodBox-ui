import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isloggedin;
  isAdmin;
  public log : LoginForm = {
    username: '',
    password: ''
  };
  constructor() {
    this.isloggedin =  localStorage.getItem('loginStatus');
    this.isAdmin =  localStorage.getItem('checkAdmin');
   }

  ngOnInit(): void {
  }

  logout(){
    this.isloggedin = "false";
    this.isAdmin = "false";
    this.log.username = "";
    localStorage.setItem('loginStatus', this.isloggedin)
    localStorage.setItem('checkAdmin', this.isAdmin)
    localStorage.setItem('username', this.log.username)
    window.location.href = '/home';
  }

}
