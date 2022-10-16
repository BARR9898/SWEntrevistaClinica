import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { CrearHistoriaClinicaComponent } from './components/crear-historia-clinica/crear-historia-clinica.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LayoutAdminComponent, CrearHistoriaClinicaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AdminModule { }
