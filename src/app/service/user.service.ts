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

  users: User[] =[
    {id: 1, username: 'dabao', password: '123'},
    {id: 2, username: 'x', password: '321'}
  ];

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<User> {
    // return this.http.get<User>('http://localhost:9080/propertyName/' + id, httpOptions);
    const l = this.users.length;
    for (let i = 0; i< l; i++) {
      if (this.users[i].id === id) {
        return of(this.users[i]);
      }
    }
    return of(null);
  }

  find(name?: string): Observable<User[]> {
    // return this.http.get<User[]>('?name=' + name, httpOptions);
    return of(this.users);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('', user, httpOptions);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>('' + id, httpOptions);
  }

  patch(user: User): Observable<User> {
    // return this.http.patch<User>('', user, httpOptions);
    const l = this.users.length;
    for (let i = 0; i< l; i++) {
      if (this.users[i].id === user.id) {
        this.users[i].username = user.username;
        this.users[i].password = user.password;
        return of(this.users[i]);
      }
    }
    return of(null);
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

  findUser(): Observable<any[]> {
    return of([
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]);
  }
}
