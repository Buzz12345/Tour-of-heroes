import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  public select(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
      console.log(this.selectedHero);
    }
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      allHeroes => this.heroes = allHeroes
    );
  }

  // public delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(arrayElement => arrayElement !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

}