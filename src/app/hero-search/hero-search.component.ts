import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ]
})

export class HeroSearchComponent implements OnInit {
  
  public heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private heroService: HeroService) {}

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public triggerList(set: string): void {
    setTimeout(() => {
      let list = document.getElementsByClassName('search__element') as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < list.length; i++) {
        list[i].style.display = set;
      }
    }, 100);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}