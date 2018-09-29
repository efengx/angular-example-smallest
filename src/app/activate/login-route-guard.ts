import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/internal/operators';
import {BaseService} from '../service/base.service';

@Injectable()
export class LoginRouteGuard implements CanActivate{

  constructor(
    private baseService: BaseService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.baseService.isUser().pipe(
      mergeMap(
        e => {
          if (!e) {
            this.router.navigate(['/login']);
          }
          return of(e);
        }
      )
    )
  }

}
