import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pk:any = {};
  @Output() evtClickImage = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  clickSurImage(nom: any) {
      this.evtClickImage.emit(nom);
  }

}
