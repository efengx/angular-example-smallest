import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../entity/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const host = "http://localhost:"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:9080/propertyName/' + id, httpOptions);
  }

  find(name: string): Observable<User[]> {
    return this.http.get<User[]>('?name=' + name, httpOptions);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('', user, httpOptions);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>('' + id, httpOptions);
  }

  patch(user: User): Observable<User> {
    return this.http.patch<User>('', user, httpOptions);
  }

  login(user: User): Observable<User>  {
    // return this.http.post<User>('http://localhost:9080/login', user, httpOptions);

    if (user.username === 'admin'
      && user.password === '123') {
      localStorage.setItem('user', JSON.stringify(user));
      const obj: User = {id: 1, username: user.username, password: user.password}
      return of<User>(obj);
    }
    return of<User>(null);
  }

}
