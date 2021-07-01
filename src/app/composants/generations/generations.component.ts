import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
/* page des générations de Pokémons.
   Utilise le service PokemMon Service pour récupérer
   les générations via l'API */
export class GenerationsComponent implements OnInit {

 /*public generations: string[] = [
  'Génération I',
  'Génération II',
  'Génération III',
  'Génération IV',
  'Génération V',
  'Génération VI',
  'Génération VII'];*/
  public generations!: any[];
  public nbGenerations!: number;

  constructor(private pkService: PokemonService) { }

  ngOnInit(): void {
    this.pkService.getGenerations().subscribe(resultat => {
      this.generations = resultat.results;
      this.nbGenerations = resultat.count;
    })
  }

}
