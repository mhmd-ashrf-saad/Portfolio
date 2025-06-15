import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  toggleSearch() {
    const searchForm = document.querySelector('.search-form');
    searchForm?.classList.toggle('active');
  }
}
