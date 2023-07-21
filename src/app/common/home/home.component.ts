import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/Classes/Item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  iphonePath:string = "../../../assets/images/iphone.jpg";
  items:any;
  categories=new Set();
  constructor(private itemService:ItemService){}

  ngOnInit():void{
    this.itemService.getItemsData().subscribe(data=>{
      this.items = data.products;
      
      console.log(this.items);
      this.categories = data.products.categories;
      console.log(this.categories);
      
    })
  }
}

