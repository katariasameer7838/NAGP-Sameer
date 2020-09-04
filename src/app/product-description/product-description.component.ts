import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DatashareService } from '../services/Datashare/datashare.service';
import { IProduct } from '../interfaces/IProduct';
import { ICart } from '../interfaces/ICart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  productID :number;
  productData : IProduct;
  constructor(private productService: ProductService,
    private datashareService: DatashareService,
    private router: Router) { }

  ngOnInit() {
    this.productID = +this.datashareService.getIdForDescPage();
    console.log(this.productData);
    this.productService.getProductById(this.productID).subscribe(
      (res)=>{
        this.productData = res;
      },
      error =>{
        console.log(error);
      }
    )
  }

  AddToCart(productData){
    let cartData : ICart = {
      ProductName: this.productData.ProductName,
      Price : this.productData.Price,
      Quantity : 1,
      Image : this.productData.Image,
      id: this.productData.id
    }
    this.productService.pushToCart(cartData);
    this.router.navigate(["/cart"]);
  }

}
