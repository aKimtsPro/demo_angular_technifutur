import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { D2Component } from "./d2/d2.component";
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";
import { DemoComponent } from "./demo.component";


const routes: Routes = [
    { path:'', component: DemoComponent, children: [
        { path: 'binding', component:DemoBindingComponent },
        { path: 'd2', component: D2Component }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}