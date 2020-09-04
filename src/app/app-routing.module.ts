import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'product-list',
  pathMatch: 'full'
},{
  path:'',
  children : [
    {
      path: '',
  redirectTo: 'product-list',
  pathMatch: 'full'
    },
    {
      path:'product-list',
      component:ProductListComponent,
      data:{
        title: 'Product List'
      }
    },
    {
      path:'product-description',
      component:ProductDescriptionComponent,
      data:{
        title: 'Product Description'
      }
    },
    {
      path:'cart',
      component:CartComponent,
      data:{
        title: 'Cart'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
