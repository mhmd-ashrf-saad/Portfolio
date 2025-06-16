import { Component } from '@angular/core';
import { Home } from '../../home/home';
import { About } from '../../about/about';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  toggleSearch() {
    const searchForm = document.querySelector('.search-form');
    searchForm?.classList.toggle('active');
  }
}
