import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import swal from 'sweetalert'

@Injectable({
  providedIn: 'root'
})
export class VerificarCredencialesService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    let log = this.authService.isLogued();

    if(log)
      return true;
    else
    {
      swal("Aviso", "Debes estar logueado para acceder aquí", "warning");
      return false;
    }
  }

}
