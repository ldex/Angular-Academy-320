import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title:string = 'Product';
  products: Product[];

  constructor(
    private productService: ProductService
  ) {

   }

  ngOnInit(): void {
    this
      .productService
      .products$
      .subscribe(
        {
          next: data => this.products = data,
          error: err => console.log(err.message)
        }
      )
  }

}
