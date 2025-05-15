import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'ubicacion', component: UbicacionComponent},
  {path: '', redirectTo: '/ubicacion', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
