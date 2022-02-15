import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  // ne pas oublier le pathMatch: 'full', sinon boucle inf.
  { path:"", redirectTo:"accueil", pathMatch:'full' },
  { path:"accueil", component: AccueilComponent },
  // C'est le DemoModule qui s'occupe de ses propre route
  { path:"demo", loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: "exo", loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule) },
  { path:"404", component: Page404Component },
  // "**" s'active pour toutes les routes, c'est une wildcard
  { path:"**", redirectTo:"404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot parce que racine
  exports: [RouterModule]
})
export class AppRoutingModule { }
