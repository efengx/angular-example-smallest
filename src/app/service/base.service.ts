import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  getUser(): Observable<User> {
    const user = localStorage.getItem('user');
    if (user) {
      return of(JSON.parse(user));
    }
    return of(null);
  }
}
