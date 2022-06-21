import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getProducts: any;
  constructor(private httpClient : HttpClient) { }

  public getCarts(){
    return this.httpClient.get(`${baseUrl}/cart/getcarts`);
  }

  public getCart(id : number){
    return this.httpClient.get(`${baseUrl}/cart/getcart/${id}`);
  }

  public addCart(cart : any){
    return this.httpClient.post(`${baseUrl}/cart/addcart`, cart);
  }

  public updateCart(cart : any, id : number){
    return this.httpClient.put(`${baseUrl}/cart/updatecart/${id}`,cart);
  }

  public deleteCart(id : number){
    return this.httpClient.delete(`${baseUrl}/cart/deletecart/${id}`);
  }
}
