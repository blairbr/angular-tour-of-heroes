import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes() : Observable<Hero[]> {
    return of (HEROES);
  }
}
