import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { repositories } from '../../models/repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
private apiUrl: string = environment.baseUrl + 'repositories.json';
  
constructor(private http: HttpClient) {}

getRepositories(): Observable<repositories[]> {
  return this.http.get<repositories[]>(this.apiUrl);
}

getRepositoryById(id: number): Observable<repositories> {
  return this.http.get<repositories[]>(this.apiUrl).pipe(
    map(repos => repos.find(r => r.id === id)!) 
  );
}

}
