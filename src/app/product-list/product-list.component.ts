import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/IProduct';
import { DatashareService } from '../services/Datashare/datashare.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: IProduct[];
  constructor(private productService : ProductService,
    private datashare: DatashareService,
    private route: Router) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(
      (res)=>{
        this.productList = res;
      },error =>{
        console.log(error);
      }
    )
  }

  moveToDescPage(Id:number){
    console.log(Id);
    this.datashare.setIdForDescPage(Id.toString());
    this.route.navigate(['/product-description']);
  }

}
