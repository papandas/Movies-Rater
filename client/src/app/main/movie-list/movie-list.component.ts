import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => console.error(error)
    );
  }

}