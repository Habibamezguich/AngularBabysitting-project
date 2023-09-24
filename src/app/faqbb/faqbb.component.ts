import { Component } from '@angular/core';

@Component({
  selector: 'app-faqbb',
  templateUrl: './faqbb.component.html',
  styleUrls: ['./faqbb.component.css']
})
export class FAQBBComponent {
  collapsed: boolean[] = [];

  toggleCollapse(index: number) {
    this.collapsed[index] = !this.collapsed[index];
  }

}
