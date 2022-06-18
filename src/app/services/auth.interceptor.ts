import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private login:UserService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const login_token=  this.login.isloggedin;
    if(login_token()){
      authReq=authReq.clone({
        setHeaders:{Authorization:`Logstatus ${login_token}`},
      });
    }
    return next.handle(authReq);
  }

}

export const AuthInterceptorProviders=[{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}]
