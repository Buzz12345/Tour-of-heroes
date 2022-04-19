import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})

export class HeroDetailComponent implements OnInit {
  
  public hero?: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  private getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      receivedHero => this.hero = receivedHero
      );
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(
        () => this.getHero()
      );
    }
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      () => this.getHero()
    );
  }
}