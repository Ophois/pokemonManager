import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonAPI } from 'src/app/modeles/pokemon-api';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
/* page d'affichage d'un pokemon */
export class PokemonComponent implements OnInit {

  /* paramètre pokemon à afficher */
  @Input() pk:any = {};
  /* evènement vers le parent pour la sélection du pokemon */
  @Output() evtClickImage = new EventEmitter;
  pokemon!: PokemonAPI;
  //injection du service Pokemon pour récupérer la liste depuis l'API
  constructor(private pkService: PokemonService) { }

  //récupération du pokemon envoyé par le parent
  ngOnInit(): void {
    this.pkService.getPokemon(this.pk['url']).subscribe(data => {
      this.pokemon = data;
    });
  }

  // sélection d'un Pokémon. Emission d'un evenement vers le parent
  clickSurImage(nom: any) {
    console.log(nom);
      this.evtClickImage.emit(nom);
  }

}
