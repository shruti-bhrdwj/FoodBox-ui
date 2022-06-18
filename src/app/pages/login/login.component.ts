import { Component, OnInit , Input} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

export interface LoginForm {
  username?: string,
  password?: string,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public log : LoginForm = {};
  isloggedin: string = 'false';
  isAdmin: string= "false";
  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  userLogin(){
    if(this.log.username?.trim()==''|| this.log.username==null){
      this.snack.open("Username is required!", '',{
        duration: 3000,
      })
      return;
    }

    if(this.log.password?.trim()==''|| this.log.password==null){
      this.snack.open("Password is required!", '',{
        duration: 3000,
      })
      return;
    }
    let urlPath = '/user/login'
    let params = this.log
    this.userService.loginControl(urlPath, params).subscribe((res: any) => {
      if(res.status == 200) {
        Swal.fire('SUCCESS','You are registered sucessfully', 'success');
        this.isloggedin="true";
        this.userService.setUser(res.data)
        localStorage.setItem('loginStatus', this.isloggedin)

        if(this.log.username=='shruti'){
          //admin
          this.isAdmin="true";
          localStorage.setItem('checkAdmin', this.isAdmin)
          window.location.href = '/auth/admin/dashboard';
        }else{
          //user dashboard
          window.location.href = '/auth/user/dashboard';
        }
      } else {
        Swal.fire('ERROR', 'Invalid credentials','error')
        this.isloggedin="false";
        localStorage.setItem('loginStatus', this.isloggedin)
      }
    },
    (err) => {
      Swal.fire('ERROR', 'Invalid credentials','error')
      let isloggedin="false";
        localStorage.setItem('loginStatus', isloggedin)
        console.log(isloggedin);
    }
    )
  }

  reset(){
    this.log = {}
  }

}
