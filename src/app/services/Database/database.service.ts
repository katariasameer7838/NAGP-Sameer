import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { IProduct } from 'src/app/interfaces/IProduct';
import { ICart } from 'src/app/interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let products : IProduct[] = [
      {
        id:1,
        Category:'Electronics',
        ProductName: 'Apple Macbook',
        Description:'Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver',
        Price:100000,
        Quantity: 0,
        Returnable : 'NO',
        Tags: 'Special Discount',
        Image:'https://images-na.ssl-images-amazon.com/images/I/61hG5bKTiQL._SL1500_.jpg'
      },
      {
        id:2,
        Category:'Electronics',
        ProductName: 'Google Pixel',
        Description:'The display- it\'s bright, colorful, and has a 90Hz refresh rate. Its stereo speakers are loud and clear. Face unlock works exactly as advertised.',
        Price:93000,
        Quantity: 0,
        Returnable : 'NO',
        Tags: 'Special Discount',
        Image:'https://images-na.ssl-images-amazon.com/images/I/71GxbypdSvL._SL1500_.jpg'
      },
      {
        id:3,
        Category:'Lifestyle/Health',
        ProductName: 'Triad Bicycle',
        Description:'Triad M1 26T 21 Speed - Fully Fitted Mountain Bicycle (Matte Orange, Ideal for: 15+ Years, Unisex) - 2 Year Frame & Fork Warranty',
        Price:10000,
        Quantity: 0,
        Returnable : 'YES',
        Tags: 'NO Discount',
        Image:'https://images-na.ssl-images-amazon.com/images/I/61D6eRmItWL._SL1100_.jpg'
      },
      {
        id:4,
        Category:'Footwear',
        ProductName: 'Adidas shoes',
        Description:'Adidas Men\'s DROGO M CBLACK/FTWWHT Running Shoes - 10 UK/india (44 EU)(CL4154_10)',
        Price:1500,
        Quantity: 0,
        Returnable : 'YES',
        Tags: '50% Discount',
        Image:'https://images-na.ssl-images-amazon.com/images/I/81Sg1ZrSCBL._UL1500_.jpg'
      }
    ]
    let cart : ICart[] = [
      
    ]
    return {products, cart};

   
  }
}
