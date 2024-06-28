import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <section>
      <p>© 2024 - 2030 Mati / Nico</p><p>151 Pokémon (and some more)</p>
    </section>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
}
