import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route: Route,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    segments: UrlSegment[],
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.handleNavigation();
  }

  handleNavigation() {
    return (
      this.authService.isNavigationAllowed ||
      this.router.parseUrl('/login/sign-in')
    );

    // const isNavigationAllowed: boolean = false;

    // if (isNavigationAllowed) {
    //   this.router.parseUrl('/main');
    //   return true;
    // }
    // this.router.parseUrl('/login/sign-in');
    // return false;
  }
}
