import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  async getPokemon(nome: string) {
    const api = new PokemonClient();

    try {
      const data = await api.getPokemonByName(nome);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
