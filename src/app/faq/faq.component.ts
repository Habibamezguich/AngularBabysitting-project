import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  collapsed: boolean[] = [];

  toggleCollapse(index: number) {
    this.collapsed[index] = !this.collapsed[index];
  }
}
