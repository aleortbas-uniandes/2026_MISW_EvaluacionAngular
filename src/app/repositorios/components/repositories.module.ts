import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositoriesList/repositoriesList.component';
import { RepositoriesDetalleComponent } from './repositoriesDetalle/repositoriesDetalle.component';

@NgModule({
  declarations: [
    RepositoriesListComponent,
    RepositoriesDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RepositoriesListComponent
  ]
})
export class RepositoriosModule {}