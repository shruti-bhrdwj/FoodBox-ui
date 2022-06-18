import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isloggedin;
  isAdmin;
  constructor() {
    this.isloggedin =  localStorage.getItem('loginStatus');
    this.isAdmin =  localStorage.getItem('checkAdmin');
   }

  ngOnInit(): void {
  }

  logout(){
    this.isloggedin = "false";
    this.isAdmin = "false";
    localStorage.setItem('loginStatus', this.isloggedin)
    localStorage.setItem('checkAdmin', this.isAdmin)
    window.location.href = '/home';
  }

}
