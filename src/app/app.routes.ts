
import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { LatestSearchQueriesComponent } from './movie/latest-search-queries/latest-search-queries.component';

export const routes: Routes = [


    { path: '', component: MovieSearchComponent }, 
    { path: 'movie-details/:id', component: MovieDetailsComponent }, // Add this line
    { path: 'latest-search', component: LatestSearchQueriesComponent }, // Add this line
    { path: '**', redirectTo: '', pathMatch: 'full' },

    
   
];

  
