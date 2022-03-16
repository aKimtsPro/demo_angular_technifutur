import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeColorsComponent } from "./components/change-colors/change-colors.component";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoCommuComponent } from "./components/demo-commu/demo-commu.component";
import { DemoDirectiveComponent } from "./components/demo-directive/demo-directive.component";
import { DemoFormsComponent } from "./components/demo-forms/demo-forms.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";
import { ObsDemoComponent } from "./components/obs-demo/obs-demo.component";
import { ProduitsComponent } from "./components/produits/produits.component";
import { DemoComponent } from "./demo.component";
import { ConnectionGuard } from "./guards/connection.guard";


const routes: Routes = [
    { path:'', component: DemoComponent, children: [
        { path: 'binding', component:DemoBindingComponent },
        { path: 'pipe', component: DemoPipeComponent },
        { path: 'directive', component: DemoDirectiveComponent },
        { path: 'commu', component: DemoCommuComponent },
        { path: 'forms', component: DemoFormsComponent },
        { path: 'produits', component: ProduitsComponent },
        { path: 'obs', component: ObsDemoComponent },
        { path: 'color', component: ChangeColorsComponent, canActivate: [ ConnectionGuard ] },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}