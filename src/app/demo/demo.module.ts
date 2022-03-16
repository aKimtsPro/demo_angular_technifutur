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
import { ProduitsComponent } from './components/produits/produits.component';
import { InsertProduitFormComponent } from './components/produits/insert-produit-form/insert-produit-form.component';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { ListProduitsItemComponent } from './components/produits/list-produits/list-produits-item/list-produits-item.component';
import { ObsDemoComponent } from './components/obs-demo/obs-demo.component';
import { ChangeColorsComponent } from './components/change-colors/change-colors.component';

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
    DemoFormsComponent,
    ProduitsComponent,
    InsertProduitFormComponent,
    ListProduitsComponent,
    ListProduitsItemComponent,
    ObsDemoComponent,
    ChangeColorsComponent,
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
