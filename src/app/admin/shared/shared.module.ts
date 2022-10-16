import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule

  ],
  exports:[
    AdminNavigationComponent
  ]
})
export class SharedModule { }
