import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import StorageHelper from '../helpers/storage.helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiServices: ApiService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {



    console.log('INTERCEPTOR!----', request.url)

    if (request.url.includes("/mirror/")) {
      let originalRequest = request

      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + StorageHelper.getItem('session').token
        }
      })

      return next.handle(request).pipe(
        catchError(err => {


          if (err instanceof HttpErrorResponse && err.status === 401) {

            return this.expiredHadle(originalRequest, next)
          }

          return throwError(() => err)
        })
      )
    }

    return next.handle(request)


  }

  private expiredHadle(originalRequest: HttpRequest<unknown>, next: HttpHandler) {

    return this.apiServices.refreshToken().pipe(
      switchMap((respuestaT) => {

        StorageHelper.setItem('session', respuestaT)

        originalRequest = originalRequest?.clone({
          setHeaders: {
            Authorization: 'Bearer ' + StorageHelper.getItem('session').token
          }
        })
        return next?.handle(originalRequest)
      })
    )
  }

}
