import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { NavComponent } from './components/nav/nav.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GreenBgDirective } from './directives/green-bg.directive';
import { DemoCommuComponent } from './components/demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './components/demo-commu-enfant/demo-commu-enfant.component';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';

@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoDirectiveComponent,
    HighlightDirective,
    GreenBgDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent,
    DemoFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
