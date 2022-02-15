import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
