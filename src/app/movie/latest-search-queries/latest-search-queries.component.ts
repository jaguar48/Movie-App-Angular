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

  constructor(private movieservice : MovieServiceService ) { }

  ngOnInit(): void {
    this.movieservice.latestSearchQueries$.subscribe(
      queries => this.latestSearchQueries = queries,
      error => console.error(error)
    );
  }
}