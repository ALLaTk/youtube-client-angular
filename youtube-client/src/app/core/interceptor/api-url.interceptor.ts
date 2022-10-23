import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  private apiUrl: string = 'https://www.googleapis.com/youtube/v3/';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: this.apiUrl + request.url,
      }),
    );
  }
}
