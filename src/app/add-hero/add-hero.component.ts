import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute,) { }

  public add(n: string, desc: string): void {
    n = n.trim();
    if (n) {
      this.heroService.addHero({name: n, description: desc} as Hero).subscribe(
        () => this.back()
      );
    }
  }

  public back(): void {
    this.location.back();
  }



  ngOnInit(): void {
  }

}
