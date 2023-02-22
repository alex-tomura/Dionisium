import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class GuardInterceptor implements HttpInterceptor {
  protected key:string = 'JWT_DIONISIUM_E&M';

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqClone = req.clone({
      headers: req.headers.set('token', this.key)
    });

    return next.handle(reqClone).pipe(
      catchError((err)=>{
        return throwError(err);
      })
    )
  }
}
