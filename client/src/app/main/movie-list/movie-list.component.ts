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

  constructor() { }

  ngOnInit() {
    
  }

  movieClicked(movie: Movie){
    //console.log("Movie Clicked -> ", movie)
    this.selectMovie.emit(movie);
  }

}
