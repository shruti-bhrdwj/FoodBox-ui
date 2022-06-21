import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // public authStatus;
  constructor(private http:HttpClient) {
  }

  //add user
  public addUser(user: any){
    return this.http.post(`${baseUrl}/user/signup`,user);
  }

  public loginControl(url: any, params?: any, payload?: any ) {
    let param = new HttpParams()
    .set('username', params.username)
    .set('password', params.password)
    return this.http.post(`${baseUrl + url}`, payload, {params: param})
  }

  public setUser(user: any){
    user.cart = []
    localStorage.setItem('userData', JSON.stringify(user))
  }

  public getUser(){
    let usr :any = localStorage.getItem('userData')
    if(usr!=null){
      return JSON.parse(usr)
    }else {
      this.logout();
      return null;
    }
  }

  public getCurrentUser(){
    return this.getUser
  }

  public isloggedin() {
    let iftrue = localStorage.getItem("loginStatus")
    if(iftrue=="false"|| iftrue==''|| iftrue==null) return false;
    else return true;
  }

  public isAdmin(){
    let iftrue = localStorage.getItem("checkAdmin")
    if(iftrue=="false"|| iftrue==''|| iftrue==null) return false;
    else return true;
  }

  public logout(){
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("userData")
    return true;
  }

  public getUsers(){
    return this.http.get(`${baseUrl}/user/all`);
  }

  public updateUser(user : any, id : number){
    return this.http.post(`${baseUrl}/user/update/${id}`,user);
  }

  public deleteUser(id : number){
    return this.http.delete(`${baseUrl}/user/delete/${id}`);
  }

}
