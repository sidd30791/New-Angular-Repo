import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item'
import { cartUrl } from '../config/api';
import { Products } from '../models/products';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
 })
export class CartService {

  constructor(private http: HttpClient) { }

getCartItems(): Observable<CartItem[]>{
 //Todo: Mapping the obtained result to our CartItem  props. (pipe and map functions)
  return this.http.get<CartItem[]>(cartUrl).pipe(
    map((result: any[]) => {
      let cartItems: CartItem[] =[];

      for(let item of result){

        let prodExists = false;
      
        for(let items in cartItems){
          if(cartItems[items].productId === item.product.id){
            cartItems[items].qty++;
            prodExists = true;
            break;
          }
        }
        if (!prodExists){
            cartItems.push(new CartItem(item.id, item.product))
        }
      }
      return cartItems
    })
  );
 } 

addProductToCart(product: Products): Observable<any>{
  return this.http.post(cartUrl, { product });
 } 
}
