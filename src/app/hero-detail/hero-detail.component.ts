import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, News } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})

export class HeroDetailComponent implements OnInit {
  
  public hero?: Hero;
  public news?: News[];
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) {}

  private getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      receivedHero => this.hero = receivedHero
    );
  }

  private getNews(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getNews().subscribe(
      receivedNews => {
        this.news = receivedNews;
        this.news = this.news.filter(e => e.heroId == id);
      }
    );
  }

  public deleteNews(id: number): void {
    this.heroService.deleteNews(id).subscribe(
      () => this.getNews()
    );
  }

  public addNews(inp: string): void {
    this.heroService.addNews({heroId: this.hero?.id, newsText: inp} as News).subscribe(
      () => this.getNews()
    )
  }

  public goBack(): void {
    this.router.navigate(['./heroes']);
  }

  public save(): void {
    if (this.hero && this.hero.name.trim().length > 0) {
      this.heroService.updateHero(this.hero).subscribe(
        () => {
          this.getHero();
          this.indicate();
        }
      );
    }
  }

  public indicate(): void {

    const saveBtn = document.getElementById('btnSave');

    if (saveBtn != undefined) {
      saveBtn.innerText = 'SAVED!';
      
      setTimeout(() => {
        saveBtn.innerText = 'SAVE CHANGES';
      }, 1000);
    }

  }
  
  public remove(): void {
    if (this.hero !== undefined) {
      this.heroService.deleteHero(this.hero.id).subscribe();
      this.goBack();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      () => {
        this.getHero(); 
        this.getNews();
      }
    );
  }
}