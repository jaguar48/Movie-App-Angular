export interface MovieSearchResult {
    search: MovieSearchItem[];
    totalResults: number;
    response: boolean;
  }
  
  export interface MovieSearchItem {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    poster: string;
  }  