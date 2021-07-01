import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prive',
  templateUrl: './prive.component.html',
  styleUrls: ['./prive.component.scss']
})
export class PriveComponent implements OnInit {

  // page privée (accessible uniquement si loggué)
  constructor() { }

  ngOnInit(): void {
  }

}
