import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  email:string="";
  password:string="";
  username:string="";

  constructor(private router:Router){}
  
  performRegister(){
   console.log(this.email+"  "+this.password+"  "+this.username);
    this.router.navigateByUrl("/home");
  }
}
