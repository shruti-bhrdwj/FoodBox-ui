import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any;

  constructor( private http:HttpClient) { }

  public getProducts(){
    return this.http.get(`${baseUrl}/product/all`);
  }
  public getProductbyName(search : string){
    return this.http.get(`${baseUrl}/product/searchByName?productName=`+search);
  }
  public getProductbySeller(search : string){
    return this.http.get(`${baseUrl}/product/searchByVendor?productName=`+search);
  }
  public getProductbyCategory(search : string){
    return this.http.get(`${baseUrl}/product/searchByCategory?productName=`+search);
  }
  public getProductById(id : number){
    return this.http.get(`${baseUrl}/product/${id}`);
  }

  public addProduct(product : any){
    return this.http.post(`${baseUrl}/product/add`, product);
  }

  public updateProduct(product : any, id : number){
    return this.http.post(`${baseUrl}/product/update/${id}`,product);
  }

  public deleteProduct(id : number){
    return this.http.delete(`${baseUrl}/product/${id}/delete`);
  }

}
