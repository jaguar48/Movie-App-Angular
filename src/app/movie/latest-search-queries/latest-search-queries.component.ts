import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../Service/movie-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-search-queries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-search-queries.component.html',
  styleUrl: './latest-search-queries.component.scss'
})


export class LatestSearchQueriesComponent implements OnInit {
  latestSearchQueries: string[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.getLatestSearchQueries();
  }

  getLatestSearchQueries(): void {
    this.movieService.getLatestSearchQueries().subscribe(
      (queries: string[]) => {
        this.latestSearchQueries = queries;
      },
      (error) => {
        console.error('Error fetching latest search queries:', error);
      }
    );
  }
}