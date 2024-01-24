import { Component } from '@angular/core';
import { MovieServiceService } from '../../Service/movie-service.service';
import { MovieSearchResult } from '../../_interface/movie-search-results';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LatestSearchQueriesComponent } from '../latest-search-queries/latest-search-queries.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule, LatestSearchQueriesComponent ],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  searchTerm: string = '';  
  searchResult: MovieSearchResult | null = null;

  constructor(private movieService: MovieServiceService , private router :Router) { }

  searchMovies() {
    if (this.searchTerm) {
      this.movieService.searchMovies(this.searchTerm).subscribe(
        result => {
          this.searchResult = result;
          
        },
        error => console.error(error)
      );
    }
  }
  public movieDetails(id: string): void {
    const detailsUrl = `/movie-details/${id}`;
    this.router.navigate([detailsUrl]);
  };

}


