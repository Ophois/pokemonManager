import { Injectable, NgZone } from '@angular/core';
import  firebase   from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// service d'authentification pour connexion via Google
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth, // service d'authentification Firebase
    public router: Router,
    public ngZone: NgZone // NgZone service
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        let tmp: any = localStorage.getItem('user')
        JSON.parse(tmp);
      } else {
        localStorage.setItem('user', '{}');
        let tmp:any = localStorage.getItem('user');
        JSON.parse(tmp);
      }
    })
  }

  // connexion avec compte Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Authentification via provider.
  // permet aussi authentification par email/password ou autre
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['prive']);
        })
    }).catch((error) => {
      window.alert(error)
    })
  }

  // retour true si utilisateur loggué
  get isLoggedIn(): boolean {
    let tmp: any = localStorage.getItem('user');
    const user = JSON.parse(tmp);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Déconnexion
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['seConnecter']);
    })
  }

}
