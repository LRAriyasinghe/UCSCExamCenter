import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router:Router
){}

  canActivate(){
        if(this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/register']);
            return false;
        }
    }
}
