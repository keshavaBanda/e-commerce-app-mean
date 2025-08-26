import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let isAuthnicated: boolean = true;
  if (isAuthnicated) {
    return true
  }
  router.navigateByUrl('/login')
  return false;
};

