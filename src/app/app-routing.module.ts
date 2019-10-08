import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

const ROUTES: Routes = [
  { path: 'barra', component: BarraComponent },
  { path: 'linea', component: LineaComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'radar', component: RadarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
