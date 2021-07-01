import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './composants/compte/connexion/connexion.component';
import { PriveComponent } from './composants/compte/prive/prive.component';
import { Prive2Component } from './composants/compte/prive2/prive2.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { AuthGuard } from './services/auth-guard.service';

// pour protéger une page, il faut ajouter le canActivate
const routes: Routes = [
  { path: 'generations', component: GenerationsComponent},
  { path: 'pokemons', component: PokemonsComponent},
  { path: 'seConnecter', component: ConnexionComponent},
  { path: 'prive', component: PriveComponent, canActivate:[AuthGuard] },
  { path: 'prive2', component: Prive2Component, canActivate:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
