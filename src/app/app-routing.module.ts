import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/components/usuarios/usuarios.component';
import { RepositoriesListComponent } from './repositorios/components/repositoriesList/repositoriesList.component';
import { RepositoriesDetalleComponent } from './repositorios/components/repositoriesDetalle/repositoriesDetalle.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'repositories', component: RepositoriesListComponent },
  { path: 'repositories/:id', component: RepositoriesDetalleComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}