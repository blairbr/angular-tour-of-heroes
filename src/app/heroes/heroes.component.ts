import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//  interface Hero {
//   id: number;
//   name: string;
// }
@Component({
  //metadata properties
  selector: 'app-heroes', //the element selector
  templateUrl: './heroes.component.html', //the location of the template file
  styleUrls: ['./heroes.component.css'], //the location of the private css files
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor(private heroService : HeroService) {}

  //Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
//waits for Observable to emit the array of heroes—which could happen now 
//or several minutes from now. The subscribe() method passes the emitted array to the callback, 
//which sets the component's heroes property.

