import { Injectable } from '@angular/core';
import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router,ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class MyGuard implements CanActivate {

  constructor(private router:Router,activeroute:ActivatedRoute) {
   }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  :Observable<boolean>|boolean
  {
      this.router.navigate(['error']);
      return true;
  }
}
