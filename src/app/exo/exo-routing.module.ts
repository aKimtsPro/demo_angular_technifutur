import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { ExoComponent } from './exo.component';

const routes: Routes = [
    { path: "", component: ExoComponent, children: [
        { path:"binding", component:ExoBindingComponent },
        { path:"chrono", component:ExoChronoComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
