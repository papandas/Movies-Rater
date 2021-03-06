import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie = null;
  editedMovie = null;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.refreshMovieList();
  }

  refreshMovieList(){
    this.apiService.getMovies().subscribe(
      (data: Movie[] )=> {
        this.movies = data;
      },
      error => console.error(error)
    );
  }

  createNewMovie(){
    this.editedMovie = {title:'', description:''};
    this.selectedMovie = null;
  }

  selectMovie(movie: Movie){
    this.selectedMovie = movie;
    this.editedMovie = null;
  }

  editMovie(movie: Movie){
    //console.log("Main->editMovie")
    this.editedMovie = movie;
    this.selectedMovie = null;
  }

  deleteMovie(movie: Movie){
    this.apiService.deleteMovie(movie.id).subscribe(
      results => this.refreshMovieList(),
      error => console.error(error)
    )
  }

  

  

}
