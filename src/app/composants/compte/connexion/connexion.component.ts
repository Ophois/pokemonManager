import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  //page de connexion. Utilise le service d'authentification
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
