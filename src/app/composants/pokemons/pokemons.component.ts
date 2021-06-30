import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormRecherchePokemon } from 'src/app/modeles/form-recherche-pokemon';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public pkSelectionne!: any;
  pokemons: any = [];
  compte = 0;
  formRecherchePokemon = new FormRecherchePokemon('');
  faOptinMonster = faOptinMonster;
  constructor(private pkService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pkService.getPokemons();
    this.compte = this.pkService.comptagePokemons();
  }
  rechercher(nom:string) {}


}
