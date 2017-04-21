import { Injectable } from '@angular/core';
import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router,ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {DbService} from './db.service';
@Injectable()
export class MyGuard implements CanActivate {

  constructor(private router:Router,private activeroute:ActivatedRoute,private db:DbService) {
   }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  :Observable<boolean>|boolean
  {
      console.log(route.params['id']);
      console.log(route);
      console.log(state);
      try {
       if(this.db.getProfile(route.params['id'])!=={})
        return true;
      } catch (error) {
        this.router.navigate(['error']);
        return false;
      }
  }
}
