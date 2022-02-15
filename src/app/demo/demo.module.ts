import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
