import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerationsAPI } from '../modeles/generations-api';
import { PokemonAPI } from '../modeles/pokemon-api';
import { PokemonsAPI } from '../modeles/pokemons-api';

@Injectable({
  providedIn: 'root'
})
//Service d'accès aux API Pokémon
export class PokemonService {

  // injection de httpClient pour l'accès aux API
  constructor(private http: HttpClient) { }
  /*pokemons = [
    {id: 1, nom:'Bulbizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 0.70, poids: 6.9, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    {id: 2, nom:'Herbizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 1, poids: 13, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    {id: 3, nom:'Florizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 2, poids: 100, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    {id: 4, nom:'Salamèche', categorie: 'lézard', type: ['feu'], taille: 0.60, poids: 8.5, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    {id: 5, nom:'Reptincel', categorie: 'flamme', type: ['feu'], taille: 1.1, poids: 19, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    {id: 6, nom:'Dracaufeu', categorie: 'flamme', type: ['feu', 'vol'], taille: 1.7, poids: 90.5, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  ];*/

  /* récupération des générations */
  getGenerations() {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GenerationsAPI>(url);
  }

  /* récupération des 20 premiers pokémons */
  getPokemons() {
    /*return this.pokemons;*/
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokemonsAPI>(url);
  }

  /* récupération d'un pokémon en fonction de son url */
  getPokemon(url: string) {
    return this.http.get<PokemonAPI>(url);
  }
  /*comptagePokemons() {
    return this.pokemons.length;
  }*/

  /*rechercherPokemon(nom: string) {
    let regex = new RegExp(nom, 'gi');
    let pokemons: any;
    this.getPokemons().subscribe(data => {
      pokemons = data.results;
      return pokemons.filter((pokemon: any) => {
        pokemon.name.match(regex);
      });
    });
  }*/


}
