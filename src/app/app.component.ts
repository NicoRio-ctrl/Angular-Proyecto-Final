import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, ContactComponent],
  template: `
    <div class='grid-container'>
      <header class='header'>
        <app-header></app-header>
      </header>
      <main class='main'>
        <router-outlet></router-outlet>
      </main>
      <footer class='footer'>
        <app-footer></app-footer>
      </footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_proyecto_final';
}