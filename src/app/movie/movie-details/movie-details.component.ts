import { Component } from '@angular/core';
import { MovieDetails } from '../../_interface/movie-details';
import { MovieServiceService } from '../../Service/movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movieId!: string; 
  movieDetails: MovieDetails | null = null;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id')!;
      this.loadMovieDetails();
    });
  }

  loadMovieDetails(): void {
  
    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(
        (result) => {
          this.movieDetails = result;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}