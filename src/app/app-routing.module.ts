import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';

const ROUTES: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarraComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
