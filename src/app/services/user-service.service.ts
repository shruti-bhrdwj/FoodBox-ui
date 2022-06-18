import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    localStorage.setItem('userData', JSON.stringify(user))
  }

  public getUser(){
    let usr = localStorage.getItem('userData')
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

  public isloggedin()
  {
    let iftrue = localStorage.getItem("loginStatus")
    if(iftrue=="false"|| iftrue==''|| iftrue==null) return false;
    else return true;
  }

  public isAdmin()
  {
    let iftrue = localStorage.getItem("checkAdmin")
    if(iftrue=="false"|| iftrue==''|| iftrue==null) return false;
    else return true;
  }

  public logout()
  {
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("userData")
    return true;
  }

}
