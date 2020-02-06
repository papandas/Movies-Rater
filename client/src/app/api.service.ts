import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 090e916aecbf8d843f759c43a52b3adc5742971d',
  })

  //private movies = ['terminator1', 'predator1'];

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get(this.baseURL, {headers: this.headers});
  }
}
