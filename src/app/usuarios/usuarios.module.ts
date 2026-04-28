import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioDetalleComponent } from './components/usuarioDetalle/usuarioDetalle.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule {}