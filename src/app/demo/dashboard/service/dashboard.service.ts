import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  getCard(): Observable<any> {
    return of(this.cards);
  }
}
