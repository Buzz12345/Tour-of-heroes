import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  
  public topHeroes: Hero[] = [];
  
  constructor(
    private heroService: HeroService
  ) {}
  
  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      allHeroes => this.topHeroes = allHeroes.slice(0, 3)
      );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}