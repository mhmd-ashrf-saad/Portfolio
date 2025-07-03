import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Link{
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  toggleSearch() {
    const searchForm = document.querySelector('.search-form');
    searchForm?.classList.toggle('active');
  }
  links :Link[]=[
    {
      name:"instagram",
      link:"https://www.instagram.com/_mhmdashrf/"
    },
    {
      name:"linkedin",
      link:"https://www.linkedin.com/in/mohamed-ashraf-abdelbaset/"
    },
    {
      name:"github",
      link:"https://github.com/mhmd-ashrf-saad"
    },
  ];
  get instagramLink() {
    return this.links.find(link => link.name === 'instagram');
  }

  get linkedinLink() {
    return this.links.find(link => link.name === 'linkedin');
  }

  get githubLink() {
    return this.links.find(link => link.name === 'github');
  }
}

