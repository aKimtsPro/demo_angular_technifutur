import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { ExoComponent } from './exo.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { FormsComponent } from './components/forms/forms.component';
import { GestionTachesComponent } from './components/gestion-taches/gestion-taches.component';
import { PanierComponent } from './components/panier/panier.component';
import { MenuComponent } from './components/menu/menu.component';
import { ObjectifComponent } from './components/objectif/objectif.component';
import { PlatComponent } from './components/menu/plat/plat.component';
import { InputComponent } from './components/parite/input/input.component';
import { ImpairComponent } from './components/parite/impair/impair.component';
import { PairComponent } from './components/parite/pair/pair.component';
import { ImpairGuard } from './guards/impair.guard';
import { PairGuard } from './guards/pair.guard';
import { PlatAsyncComponent } from './components/menu/plat-async/plat-async.component';

const routes: Routes = [
    { path: "", component: ExoComponent, children: [
        { path:"binding", component:ExoBindingComponent },
        { path:"chrono", component:ExoChronoComponent },
        { path:"products", component: DisplayProductsComponent },
        { path:"commu", component: ExoParentComponent },
        { path:"custom-dir", component: CustomDirComponent},
        { path:"forms", component: FormsComponent},
        { path:"tache", component: GestionTachesComponent},
        { path:"panier", component: PanierComponent},
        { path:"menu", component: MenuComponent},
        { path:"objectif", component: ObjectifComponent},
        { path:"plat/:id", component: PlatComponent},
        { path:"plat-async/:id", component: PlatAsyncComponent},
        { path:"parite", component: InputComponent },
        { path:"impair/:nbr", component: ImpairComponent, canActivate: [ ImpairGuard ] },
        { path:"pair/:nbr", component: PairComponent, canActivate: [ PairGuard ] },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
