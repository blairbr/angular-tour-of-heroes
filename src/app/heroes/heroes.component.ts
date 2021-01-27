import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//  interface Hero {
//   id: number;
//   name: string;
// }
@Component({
  //metadata properties
  selector: 'app-heroes',  //the element selector
  templateUrl: './heroes.component.html', //the location of the template file
  styleUrls: ['./heroes.component.css'] //the location of the private css files
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // hero = 'Windstorm';

  constructor() { }

  //Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
  }

}
