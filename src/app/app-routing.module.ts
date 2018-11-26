import { PanierComponent } from './panier/panier.component';
import { LivresComponent } from './livres/livres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component: LivresComponent},
  {path : 'panier/:idLivre', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
