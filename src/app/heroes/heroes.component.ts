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

  constructor(private heroService: HeroService) { }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      allHeroes => this.heroes = allHeroes
    );
  }

  public add(name: string): void {
    name = name.trim();
    if (name) {
      this.heroService.addHero({name} as Hero).subscribe(
        hero => this.heroes.push(hero)
      );
    }
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter(arrayElement => arrayElement !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}