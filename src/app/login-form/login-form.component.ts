import { Component, OnInit } from '@angular/core';
import { UserModel } from './../model/user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userModel = new UserModel('', '');
  constructor(private userServices: UserService) {
   }

  ngOnInit(): void {
  }

  login(): void {
    this.userServices.login(this.userModel).subscribe((data: any[])=>{
      console.log(data);
    })  
  }

}
