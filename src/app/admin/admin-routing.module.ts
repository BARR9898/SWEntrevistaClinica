import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHistoriaClinicaComponent } from './components/crear-historia-clinica/crear-historia-clinica.component';

const routes: Routes = [
  {path: 'nueva-historia-clinica' , component:CrearHistoriaClinicaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
