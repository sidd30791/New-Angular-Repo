import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList: Products[] = [];

  ngOnInit(): void {
    
    //this.productList = this.productService.getProducts();

    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })

  }

}
