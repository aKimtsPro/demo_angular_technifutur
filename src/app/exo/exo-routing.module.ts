import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';

const routes: Routes = [
    { path:"binding", component:ExoBindingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
