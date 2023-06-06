import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  email:string="";
  password:string="";

  constructor(){}
  
  performLogin(){
   console.log(this.email+"  "+this.password);
  }
}
