import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }

  public getOrders(){
    return this.httpClient.get(`${baseUrl}/order/getorders`);
  }

  public getOrder(id : number){
    return this.httpClient.get(`${baseUrl}/order/getorder/${id}`);
  }

  public addOrder(id : number, params?: any, payload?: any){
    let param = new HttpParams()
    .set('pid', params.pid)
    .set('address', params.address)
    .set('phoneNo', params.phoneNo)
    return this.httpClient.post(`${baseUrl}/order/addorder/${id}`,payload, {params});
  }

  public updateOrder(order : any, id : number){
    return this.httpClient.put(`${baseUrl}/order/updateorder/${id}`,order);
  }

  public deleteOrder(id : number){
    return this.httpClient.delete(`${baseUrl}/order/deleteorder/${id}`);
  }

}
