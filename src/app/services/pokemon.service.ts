import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [
    {id: 1, nom:'Bulbizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 0.70, poids: 6.9, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    {id: 2, nom:'Herbizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 1, poids: 13, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    {id: 3, nom:'Florizarre', categorie: 'graine', type: ['plante', 'poisson'], taille: 2, poids: 100, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    {id: 4, nom:'Salamèche', categorie: 'lézard', type: ['feu'], taille: 0.60, poids: 8.5, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    {id: 5, nom:'Reptincel', categorie: 'flamme', type: ['feu'], taille: 1.1, poids: 19, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    {id: 6, nom:'Dracaufeu', categorie: 'flamme', type: ['feu', 'vol'], taille: 1.7, poids: 90.5, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  ];

  getPokemons() {
    return this.pokemons;
  }

  comptagePokemons() {
    return this.pokemons.length;
  }
  constructor() { }
}
