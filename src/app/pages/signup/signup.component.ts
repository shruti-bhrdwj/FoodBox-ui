import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

export interface singupForm {
  email?: string,
  username?: string,
  password?: string,
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signup : singupForm = {};

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  register() {
    this.signup;

    if(this.signup.username == '' || this.signup.username == null) {
    //alert('field Required!!');
    this.snack.open("Username is Required!",'Ok',{
      duration: 3000,
    });
    return;
    }

    if(this.signup.password == '' || this.signup.password == null) {
        //alert('field Required!!');
        this.snack.open("Password cannot be null!",'Ok',{
          duration: 3000,
        });
        return;
    }
    this.userService.addUser(this.signup).subscribe(
       (data)=>{
         //success
         console.log(data);
         Swal.fire('SUCCESS','You are registered sucessfully. Login to continue', 'success')
         window.location.href = '/auth/login';
       },
       (error)=>{
         //error
         console.log(error);
         Swal.fire('ERROR', 'Something went wrong','error')
       }

    )
  }

  reset() {
    this.signup = {}
  }
}


