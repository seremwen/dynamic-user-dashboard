import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { BehaviorSubject, Observable, catchError, finalize, throwError } from "rxjs";
import { EnvironmentInterface, _environment } from "..";

@Injectable()
export class HTTPStatus {
  private behavior: BehaviorSubject<boolean>;

  constructor() { this.behavior = new BehaviorSubject<boolean>(false) }

  setHttpStatus(flight: boolean) { this.behavior.next(flight) }

  getHttpStatus(): Observable<boolean> { return this.behavior.asObservable() }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  readonly baseUrl: string;
    auth: any;
  constructor(private status: HTTPStatus,
              private notification: NzNotificationService,

              private injector: Injector) {
    this.baseUrl = this.injector.get<EnvironmentInterface>(_environment).environment;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.status.setHttpStatus(true);
    const token = this.auth.getToken();
    const request = token ? req.clone({
      url: this.checkUrl(req.url),

      setHeaders: { Authorization: `Bearer ${token}` }
    }) : req.clone({ url: this.checkUrl(req.url) });
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this.notification.warning('Warning', this.getMessage(err), { nzDuration: 20000, nzAnimate: true });
        return throwError(err);
      }),
      finalize(() => this.status.setHttpStatus(false)));
  }

  getMessage(err: HttpErrorResponse) {
    if (err.status == 0) return 'This service currently unreachable';
    if(err.error == 500) return err.error? err.error.narrative ? err.error.narrative : err.error.error_description ? err.error.error_description : err.error.message ? err.error.error : '': '';
    if(err.status == 404) return err.error? err.error.narrative ? err.error.narrative : err.error.error_description : '';
    if (err.error) {
      const error = (typeof err.error === 'string' || err.error instanceof String) ?
         JSON.parse(err.error.toString()) : err.error;
      if (error && (error.message || error.error_description))
        return error.message ? error.message : error.error_description;
    }
    return err.message ? err.message : 'Sorry, Unexpected Server Response';
  }

  checkUrl(url: string): string {
    if (url.startsWith('http')) return url;
    const normalisedUrl = url.replace('//', '/');
    return `${this.baseUrl}${normalisedUrl}`;
  }

}