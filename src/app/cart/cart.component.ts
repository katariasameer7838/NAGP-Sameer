import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICart } from '../interfaces/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData : ICart[];
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getCart().subscribe(
      (res)=>{
        console.log(res);
        this.cartData = res;
      }, error =>{

      }
    );
  }

}
