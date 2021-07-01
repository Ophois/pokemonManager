import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

/* Barre de navigation
  Utilise le service d'authentification pour modifier le menu
  en fonction du statut de l'utilisateur (loggué/non loggué)
*/
@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.scss']
})
export class BarreDeNavigationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
