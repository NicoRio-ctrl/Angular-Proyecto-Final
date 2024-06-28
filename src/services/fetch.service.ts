import { Injectable } from '@angular/core';
import { PokemonInterface } from './pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  constructor() {}

  async getPokemons(): Promise<PokemonInterface[]> {
    const data = await fetch(this.url);
    const pokemons = (await data.json()) ?? [];

    const detailedPokemons = await Promise.all(
      pokemons.results.map(async (pokemon: { url: string }) => {
        const detailData = await fetch(pokemon.url);
        const detail = await detailData.json();
        return detail;
      })
    );

    return detailedPokemons;
  }

  async getPokemonById(id: string): Promise<PokemonInterface> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const data = await fetch(url);
    const pokemon = await data.json();
    return pokemon;
  }

  async submitApplication(firstName: string, lastName: string, email: string, suggestions: string) {
    alert(JSON.stringify({ firstName, lastName, email, suggestions }));
  }

}
