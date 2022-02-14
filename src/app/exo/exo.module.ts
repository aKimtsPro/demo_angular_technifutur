import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';



@NgModule({
  declarations: [
    ExoBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
