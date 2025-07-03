import { Component } from '@angular/core';

interface Link{
  name: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();

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
