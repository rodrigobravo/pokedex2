import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon-serviice.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  searchTerm = '';
  pokemon: any;
  error: string | undefined;

  constructor(private pokemonService: PokemonService) { }

  searchPokemon() {
    if (this.searchTerm.trim() === '') {
      this.error = 'Please enter a Pokémon name.';
      return;
    }

    this.pokemonService.getPokemon(this.searchTerm)
      .then((data) => {
        this.pokemon = data;
        console.log(this.pokemon.official-artwork.front_default);
        this.error = undefined;
      })
      .catch((error) => {
        this.error = error.message || 'An error occurred while fetching Pokémon data.';
        this.pokemon = undefined;
      });
  }
}
