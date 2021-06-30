import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {

 public generations: string[] = [
  'Génération I',
  'Génération II',
  'Génération III',
  'Génération IV',
  'Génération V',
  'Génération VI',
  'Génération VII'];

  constructor() { }

  ngOnInit(): void {
  }

}
