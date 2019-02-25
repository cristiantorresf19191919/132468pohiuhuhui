import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class PrimerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenPrimario = localStorage.getItem("MainToken");
    const adminToken = localStorage.getItem("id_token");
    if (tokenPrimario) {
      const authReq = req.clone({
        setHeaders: { Authorization: tokenPrimario }
      });
      return next.handle(authReq);
    }
    if (adminToken) {
      const adminTokenReq = req.clone({
        setHeaders: { admintoken: adminToken }
      });
      return next.handle(adminTokenReq);
    } else {
      return next.handle(req);
    }
  }
}
