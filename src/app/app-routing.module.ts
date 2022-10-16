import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './admin/components/layout-admin/layout-admin.component';

const routes: Routes = [
  {
  path: 'admin', 
  component: LayoutAdminComponent, 
  loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
