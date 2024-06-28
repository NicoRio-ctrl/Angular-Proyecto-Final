import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <section>
      <img src='notFound.png'>
      <p>
        404 Not Found
      </p>
    </section>
  `,
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
