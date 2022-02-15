import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoDirectiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
