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

  // pokemon sélectionné
  public pkSelectionne!: any;
  //liste des Pokémons
  pokemons: any = [];
  // comptage des Pokémons en BDD
  compte = 0;
  // icone du moteur de recherche
  faOptinMonster = faOptinMonster;
  // formulaire pour la recherche. Non fonctionnel car l'API
  // ne permet pas la recherche
  formRecherchePokemon = new FormRecherchePokemon('');
  //easter Egg. Si C3PO est saisi dans le formulaire...
  easterEggs = false;

  // injection du service Pokemon pour accès à l'API
  constructor(private pkService: PokemonService) { }

  // récupération de la liste des 20 premiers Pokémons
  ngOnInit(): void {
    /*this.pokemons = this.pkService.getPokemons();
    this.compte = this.pkService.comptagePokemons();*/
    this.pkService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
      this.compte = data.count;
    });
  }
  //recherche. Non implémenté dans l'API
  rechercher(nom:string) {
    //this.pokemons = this.pkService.rechercherPokemon(nom);
    this.easterEggs = false;
    if(nom == 'C3PO') this.easterEggs = true;
  }

  // annulation du formulaire. Récupère la liste d'origine
  annuler() {
    /*this.pokemons = this.pkService.getPokemons();*/
    this.pkService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
    });
    this.formRecherchePokemon.setNom('');
    this.easterEggs = false;
  }

}
