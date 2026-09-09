// src/app/interceptors/interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

let handling401 = false;

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('pyramide_token');
  let authReq = req;

  if (token && !req.url.includes('/login') && !req.url.includes('/register')) {
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !handling401) {
        handling401 = true;
        localStorage.removeItem('pyramide_token');
        localStorage.removeItem('pyramide_user');
        router.navigate(['/auth/login']);
        setTimeout(() => handling401 = false, 2000);
      }
      return throwError(() => error);
    })
  );
};