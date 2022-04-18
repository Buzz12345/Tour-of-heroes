import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements  InMemoryDbService {

  public createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    const news = [
      { newsId: 1, heroId: 1, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 2, heroId: 1, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 3, heroId: 10, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 4, heroId: 2, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 5, heroId: 3, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 6, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 7, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 8, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 9, heroId: 6, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 10, heroId: 2, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 11, heroId: 1, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 12, heroId: 3, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 13, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 14, heroId: 5, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 15, heroId: 1, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 16, heroId: 8, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 17, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 18, heroId: 6, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 19, heroId: 4, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '},
      { newsId: 20, heroId: 2, newsText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, amet. Commodi ipsam aperiam fugit maiores necessitatibus minima eveniet fugiat facere reiciendis, tempora ducimus ullam cum dignissimos beatae cumque ut reprehenderit ad laboriosam, natus qui aliquid mollitia pariatur repudiandae. Recusandae aperiam '}
    ]
    return {heroes, news};
  }

  public genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}