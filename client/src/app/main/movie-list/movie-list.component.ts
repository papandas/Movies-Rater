import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() selectMovie = new EventEmitter<Movie>();
  @Output() editedMovie = new EventEmitter<Movie>();
  @Output() deleteMovie = new EventEmitter<Movie>();
  @Output() createNewMovie = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  movieClicked(movie: Movie) {
    this.selectMovie.emit(movie);
  }

  editMovie(movie: Movie) {
    //console.log("Clicked on edit button!")
    this.editedMovie.emit(movie);
  }

  delete_Movie(movie: Movie){
    this.deleteMovie.emit(movie);
  }

  createANewMovie(){
    this.createNewMovie.emit();
  }
}
