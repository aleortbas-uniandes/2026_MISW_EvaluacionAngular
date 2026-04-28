import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioDetalleComponent } from '../usuarioDetalle/usuarioDetalle.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<Usuarios> = [];
  usuarios$!: Observable<Usuarios[]>;
  selected: Boolean = false;
  selectedUsuario!: Usuarios;

  constructor(private UsuariosService: UsuariosService, private http: HttpClient) { }

  getUsuarios(): void{
    this.UsuariosService.getUsuarios().subscribe(
      (response: Usuarios[]) => {
        this.usuarios = response;
      },
      (error) => {
        console.error('Error fetching usuarios:', error);
      }
    )
  }

  onSelected(usuario: Usuarios): void {
    this.selected = true;
    this.selectedUsuario = usuario;
  }

  ngOnInit() {
    this.usuarios$ = this.UsuariosService.getUsuarios();
  }

}
