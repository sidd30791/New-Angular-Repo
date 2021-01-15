import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { MessangerService } from '../../../services/messanger.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessangerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
      this.msg.getMsg().subscribe((product: Products) => {
      console.log(product)
      //this.addProductToCart(product);
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items; 
      this.calcCartTotal();
    })

  }

  calcCartTotal(){
    this.cartTotal=0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
      console.log(this.cartTotal);
    })
  }
}
   