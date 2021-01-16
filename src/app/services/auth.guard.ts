import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { map , tap,take} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
	boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
	
	const loadedUser = localStorage.getItem('userData');
	
    return this.authService.user.pipe(
	take(1),
	map(user => {
		const isAuth = user || loadedUser ? true : false;
		if (isAuth) {
          return true;
        }
		return this.router.createUrlTree(['/dashboard/auth']);
	})
	/*,
	tap(isAuth => {
		if (!isAuth) {
			this.router.navigate(['dashboard/auth']);
		}
	})*/
	)
  }
  
}
