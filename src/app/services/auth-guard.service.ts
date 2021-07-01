import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/* service de sécurité. gère l'accès aux pages protégées */
export class AuthGuard implements CanActivate {

  // injection du service d'authentification et du service de routage
  constructor(public authService: AuthService,
             public router: Router) { }

  // fonction d'autorisation d'accès aux pages protégées
  //redirige vers la page de connexion si non loggué
  canActivate( next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean {
                if(this.authService.isLoggedIn !== true)
                this.router.navigate(['seConnecter']);
                return true;
              }
}
