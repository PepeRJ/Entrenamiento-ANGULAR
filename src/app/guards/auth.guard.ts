import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

 return authService.isLogged() ? true : (alert('No tienes permisos'), router.navigate(['/home']));

  /* if (!authService.isLogged()) {

    router.navigate(['/home']);
    return false; // Retornar false para indicar que la navegación no está permitida
  }

  return true; // Retornar true para indicar que la navegación está permitida */


};