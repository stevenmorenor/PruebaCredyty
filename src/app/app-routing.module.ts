import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarIngresoComponent } from './Components/registrar-ingreso/registrar-ingreso.component';
import { LiquidarValorSalidaComponent } from './Components/liquidar-valor-salida/liquidar-valor-salida.component';
import { ObtenerListadoComponent } from './Components/obtener-listado/obtener-listado.component';

const routes: Routes = [
  { path: 'registrar-ingreso', component: RegistrarIngresoComponent },
  { path: 'liquidar-valor-salida', component: LiquidarValorSalidaComponent },
  { path: 'obtener-listado', component: ObtenerListadoComponent },
  // Puedes agregar más rutas según tus necesidades
  { path: '', redirectTo: 'registrar-ingreso', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
