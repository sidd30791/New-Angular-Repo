import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { MessangerService } from '../../../../services/messanger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor( 
    private msg: MessangerService,
    private cartservice: CartService) { }

  @Input() productItem: Products;

  ngOnInit(): void {
  }

  handdleAddToCart(){
    this.cartservice.addProductToCart(this.productItem).subscribe(( )=> {  
      this.msg.sendMsg(this.productItem);
    })    
  }
}
