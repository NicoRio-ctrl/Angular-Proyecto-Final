import { Component, Input} from '@angular/core';
import { PokemonInterface } from '../../../../services/pokemon-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-info',
  standalone: true,
  imports: [],
  template: `
    <section class='pokemon' (click)="goToDetail()">
     
      <p class='pokemon--name'>{{ pokeData.name }}</p>
      <img 
        class='pokemon--img'
        [src]="pokeData.sprites.front_default"
        alt="{{ pokeData.name }}"
      />
      
      <div class='pokemon--type--container'>
        @for(type of pokeData.types; track type.slot){          
          <span [className]="'pokemon-type ' + type.type.name"> {{type.type.name}} </span>
        }
      </div>
    </section>
  `,
  styleUrl: './poke-info.component.css'
})
export class PokeInfoComponent {
  @Input() pokeData!: PokemonInterface;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/pokemon', this.pokeData.id]);
  }
}