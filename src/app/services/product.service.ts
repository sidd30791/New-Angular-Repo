import { Injectable } from '@angular/core';
import { Products } from '../models/products'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api'

//const apiUrl = 'http://localhost:3000/Products';
const apiUrl = productsUrl; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // prodcuts: Products[] = [
  //   new Products(1, 'P1', 'P1Desc', 100),
  //   new Products(2, 'P2', 'P2Desc', 200),
  //   new Products(3, 'P3', 'P3Desc', 300),
  //   new Products(4, 'P4', 'P4Desc', 400),
  //   new Products(5, 'P5', 'P5Desc', 500),
  //   new Products(6, 'P6', 'P6Desc', 600),
  //   new Products(7, 'P7', 'P7Desc', 700),
  //   new Products(8, 'P8', 'P8Desc', 800),
  //   new Products(9, 'P9', 'P9Desc', 900),
  // ]
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Products[]>{
    //return this.prodcuts
    return this.http.get<Products[]>(apiUrl);
  }
}
