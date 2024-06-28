import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonInterface } from '../../../../services/pokemon-interface';
import { FetchService } from '../../../../services/fetch.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  standalone: true,
  imports: [],
  template: `
    <section class='flex-container'>
      <div class='flex-item'>
        <section class='name-img-types'>
          <h2 class='name'>{{ pokemon?.name }}</h2>
          <img
            class='img'
            [src]="pokemon?.sprites?.front_default" 
            alt="{{ pokemon?.name }}"
          />
          <div class="types">
            @for (type of pokemon?.types; track type.slot) {
              <span id='types__item' [className]="type.type.name">{{ type.type.name }} </span>
            }
          </div> 
        </section>
        
        <section class='info-abilities-items'>
          <p class='info'><span class='encabezado'>Weight:</span> {{ pokemon && pokemon.weight ? pokemon.weight / 10 : 0 }}kg</p>
          <p class='info'><span class='encabezado'>Height:</span> {{ pokemon && pokemon.height ? pokemon.height / 10 : 0 }}m</p>
          <ul class='list'>
            <p><span class='encabezado'>Abilities:</span></p>
            @for(ability of pokemon?.abilities; track ability.slot){
              <li class=''>{{ability.ability.name}} {{ability.is_hidden? '(hidden ability)' : ''}}</li>
            }
          </ul>
          <ul class='list'>
            <p><span class='encabezado'>Items:</span></p>
            @if(!pokemon?.held_items?.length){
              <li class=''>none</li>
            }
            @for(item of pokemon?.held_items; track item.item.name){
              <li class=''>{{item.item.name}}</li>
            }
          </ul>
        </section>
      </div>
      
      <div class='flex-item'>
        <section class='stats'>
          <ul class='list'>
            <p><span class='encabezado'>Stats:</span></p>
            <li >
              @if(pokemon?.stats){
                @for (stat of pokemon?.stats; track stat.stat.name) {
                  <p>
                    <span class="stat-icon">{{ getStatIcon(stat.stat.name) }}</span>
                    <span class="stat-name">{{ stat.stat.name }}:</span>
                    <span class="stat-value">{{ stat.base_stat }}</span>
                  </p>
                }
              }
            </li>
          </ul>
        </section>
      </div>

      <button class='button' (click)="goBack()">Back</button>

    </section>
  `,
  styleUrl: './poke-detail.component.css'
})

export class PokeDetailComponent implements OnInit{
  @Input() pokemon: PokemonInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || isNaN(Number(id)) || Number(id) <= 0 || Number(id) > 151){
      this.router.navigate(['/not-found']);
    }
    else {
      this.fetchService.getPokemonById(id).then((pokemon) => {
        this.pokemon = pokemon;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  getStatIcon(statName: string): string {
    switch (statName) {
      case 'hp':
        return '❤️';
      case 'attack':
        return '⚔️';
      case 'defense':
        return '🛡️';
      case 'special-attack':
        return '⚡';
      case 'special-defense':
        return '🔰';
      case 'speed':
        return '👟';
      default:
        return '';
    }
  }
}
