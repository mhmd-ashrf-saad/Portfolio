import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  downloadCV() {
    const link = this.document.createElement('a');
    link.href = 'mohamed-ashraf-cv.pdf';
    link.download = 'Mohamed_Ashraf_CV.pdf';
    link.target = '_blank';
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }
}
