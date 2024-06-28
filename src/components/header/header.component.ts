import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <div class="navbar__item item--logo">
        <a class="item--title" routerLink="/">
          <img src="https://fontmeme.com/permalink/240628/208344076cdbfbce4feb5dd73a7a8419.png" class="item--title">
        </a>
      </div>

      <div class="navbar__item">
        <a routerLink="/contact">ContactUs</a>
      </div>
    </nav>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
}