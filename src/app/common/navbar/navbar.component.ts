import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logoPath:String = "../../../assets/images/scart2.png"
  bag:String = "../../../assets/images/bag.png"
  profile:String = "../../../assets/images/profile.png"
  wishlist:String = "../../../assets/images/wishlist.png"


}
