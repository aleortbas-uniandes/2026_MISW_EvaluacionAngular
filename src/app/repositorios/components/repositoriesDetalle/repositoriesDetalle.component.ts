import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from '../services/repositories.service';
import { repositories } from '../../models/repositories';

@Component({
  selector: 'app-repositories-detalle',
  standalone: false,
  templateUrl: './repositoriesDetalle.component.html',
  styleUrls: ['./repositoriesDetalle.component.css'],
})
export class RepositoriesDetalleComponent implements OnInit {
  repositorie: repositories | null = null;
  constructor(
    private route: ActivatedRoute,
    private repositoriosService: RepositoriesService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']); 
      this.repositoriosService
        .getRepositoryById(id)
        .subscribe((repo: repositories) => {
          this.repositorie = repo;
        });
    });
  }
}
