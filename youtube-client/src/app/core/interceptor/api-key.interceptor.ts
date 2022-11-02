import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private key: string = 'AIzaSyApHVlWqwDay7INdWaGRFUFLZyfOwtwu68';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({
      params: request.params.set('key', this.key),
    });
    return next.handle(apiRequest);
  }
}
