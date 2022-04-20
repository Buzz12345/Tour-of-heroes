import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Tour of Heroes';

  public toggleSearch(): void {
    let searchBtn = document.getElementById('searchBtn');
    let search = document.getElementById('headerSearch');
    let navbar = document.getElementById('headerNav');

    if (searchBtn?.classList.contains('active')) {
      searchBtn?.classList.remove('active');
      search?.classList.remove('active');
      navbar?.classList.remove('active');
    }
    else {
      searchBtn?.classList.add('active');
      search?.classList.add('active');
      navbar?.classList.add('active');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
