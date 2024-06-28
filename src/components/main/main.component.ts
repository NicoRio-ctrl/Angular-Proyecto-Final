import { Component, inject } from '@angular/core';
import { PokeInfoComponent } from './main_components/poke-info/poke-info.component';
import { PokemonInterface } from '../../services/pokemon-interface';
import { FetchService } from '../../services/fetch.service';
 
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PokeInfoComponent],
  template: `
    
    <form class='search'>
      <input 
        type="search" 
        placeholder="Name... (Example: Ditto)" 
        #filter 
        (input)="filterPokemons(filter.value)"
      />
    </form>

    <h2 class='title'>First Generation of Pokemon!</h2>
    
    <section class='grid-container'>
      @if (!filteredPokemonList.length){
        <div class='pikaMessage'>
          <img src='notFound.png'>
          <p>I'm sorry. I can't find the pokémon you are looking for.</p>
        </div>
      }
      @for (pokemon of filteredPokemonList; track pokemon.id){
        <app-poke-info [pokeData]="pokemon" class='grid--item'></app-poke-info>
      }
    </section>
  `,
  styleUrl: './main.component.css'
})
export class MainComponent {
  fetchService: FetchService = inject(FetchService);
  pokemonList: PokemonInterface[] = [];
  filteredPokemonList: PokemonInterface[] = [];
  
  constructor() {
    this.fetchService
      .getPokemons()
      .then((pokemonList: PokemonInterface[]) => {
        this.pokemonList = pokemonList;
        this.filteredPokemonList = pokemonList;
      });
  }

  filterPokemons(text: string) {
    if (!text) {
      this.filteredPokemonList = this.pokemonList;
    }
    this.filteredPokemonList = this.pokemonList.filter((pokemon) =>
      pokemon?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
