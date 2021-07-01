import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-prive2',
  templateUrl: './prive2.component.html',
  styleUrls: ['./prive2.component.scss']
})
export class Prive2Component implements OnInit {

  // page privée (accessible uniquement si loggué)
  //utilise le service d'authentification pour la déconnexion
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  bye(){
    this.authService.SignOut();
  }

}
