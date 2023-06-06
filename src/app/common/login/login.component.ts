import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   email:string="";
   password:string="";

   constructor(private router: Router){}

   performLogin(){
      console.log(this.email+"  "+this.password);
      this.router.navigateByUrl('/home');
   }


}
