import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../services/repositories.service';
import { repositories } from '../../models/repositories';

@Component({
  selector: 'app-repositories-list',
  standalone: false,
  templateUrl: './repositoriesList.component.html',
  styleUrls: ['./repositoriesList.component.css']
})
export class RepositoriesListComponent implements OnInit {

  repositories: Array<repositories> = [];

  constructor(private repositoriesService: RepositoriesService) {}

  ngOnInit(): void {
    this.repositoriesService.getRepositories().subscribe(
      (data: repositories[]) => {
        this.repositories = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}