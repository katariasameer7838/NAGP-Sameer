import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { ICart } from '../interfaces/ICart';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<IProduct[]>("api/products");
  }

  getProductById(id)
  {
    return this.http.get<IProduct>("api/products/"+id);
  }

  getCart(){
    return this.http.get<ICart[]>("api/cart");
  }

  pushToCart(cartData : ICart)
  {
    return this.http.post("api/cart",cartData);
  }
}
