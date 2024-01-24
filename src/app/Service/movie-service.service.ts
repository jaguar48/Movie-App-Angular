import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { MovieDetails } from '../_interface/movie-details';
import { MovieSearchResult } from '../_interface/movie-search-results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }


  public searchMovies = (title: string): Observable<MovieSearchResult> => {
    const route = `movie/search?title=${title}`;
    return this.http.get<MovieSearchResult>(this.createCompleteRoute(route));
  }
  
  public getMovieDetails = (imdbId: string): Observable<MovieDetails> => {
    const route = `movie/${imdbId}`;
    return this.http.get<MovieDetails>(this.createCompleteRoute(route));
  }
  public getLatestSearchQueries(): Observable<any> {
    const route = 'movie/latest-queries';
    return this.http.get<any>(this.createCompleteRoute(route));
  }
  private createCompleteRoute = (route: string) => {
    return `${this.envUrl.urlAddress}/${route}`;
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
