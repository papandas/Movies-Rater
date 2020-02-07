import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 090e916aecbf8d843f759c43a52b3adc5742971d',
  })

  //private movies = ['terminator1', 'predator1'];

  constructor(private httpClient: HttpClient) { }

  createMovie(title: string, description: string){
    const url = `${this.baseURL}api/movies/`;
    const body = JSON.stringify({title, description });
    return this.httpClient.post(url, body, { headers: this.headers });
  }

  updateMovie(movieId: number, title: string, description: string){
    const url = `${this.baseURL}api/movies/${movieId}/`;
    const body = JSON.stringify({title, description });
    return this.httpClient.put(url, body, { headers: this.headers });
  }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseURL + 'api/movies/', { headers: this.headers });
  }

  getMovie(movieId: number) {
    const url = `${this.baseURL}api/movies/${movieId}/`;
    return this.httpClient.get<Movie>(url, { headers: this.headers });
  }

  deleteMovie(movieId: number){
    const url = `${this.baseURL}api/movies/${movieId}/`;
    return this.httpClient.delete<Movie>(url, { headers: this.headers });
  }

  rateMovie(rate: number, movieId: number) {
    const url = this.baseURL + 'api/movies/' + movieId + '/rate_movie/';
    const body = { 'stars': rate };
    return this.httpClient.post(url, body, { headers: this.headers });
  }
}
