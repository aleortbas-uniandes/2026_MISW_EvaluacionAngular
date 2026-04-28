import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-usuario-detalle',
  standalone: false,
  templateUrl: './usuarioDetalle.component.html',
  styleUrls: ['./usuarioDetalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

   @Input() usuarioDetalle!: Usuarios;

  constructor() { }

  ngOnInit() {
  }

}
