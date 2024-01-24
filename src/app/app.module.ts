// Import necessary modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Make sure to import FormsModule and ReactiveFormsModule

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
