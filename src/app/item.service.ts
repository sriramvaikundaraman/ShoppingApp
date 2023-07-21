import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './Classes/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = "https://dummyjson.com/products";
  constructor(private http:HttpClient) { }

  getItemsData():Observable<any>{
    return this.http.get<any>(this.itemUrl);
  }
}
