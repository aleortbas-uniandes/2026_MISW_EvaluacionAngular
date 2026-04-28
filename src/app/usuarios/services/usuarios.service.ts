import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl: string = environment.baseUrl + 'users.json';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl);
  }
}
