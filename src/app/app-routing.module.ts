import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { D2Component } from './components/demo/d2/d2.component';
import { DemoBindingComponent } from './components/demo/demo-binding/demo-binding.component';
import { DemoComponent } from './components/demo/demo.component';
import { Page404Component } from './components/page404/page404.component';
import { ExoModule } from './exo/exo.module';

const routes: Routes = [
  { path:"", redirectTo:"accueil", pathMatch:'full' },
  { path:"accueil", component: AccueilComponent },
  { path:"demo", component: DemoComponent, children: [
    { path:"binding", component: DemoBindingComponent }, // demo/binding
    { path:"d2", component: D2Component } // demo/d2
  ] },
  { path: "exo", loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule) },
  { path:"404", component: Page404Component },
  { path:"**", redirectTo:"404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
