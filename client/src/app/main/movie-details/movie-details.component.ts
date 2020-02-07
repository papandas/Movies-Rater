import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../api.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie ;
  @Output() updateMovie = new EventEmitter<Movie>();

  rateHovered = 0;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  rateHover(rate: number){
    this.rateHovered = rate;
  }

  rateClicked(rate: number){
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result => this.getMovieDetail(),
      error => console.error(error)
    );
  }

  getMovieDetail(){
    this.apiService.getMovie(this.movie.id).subscribe(
      (result: Movie) => this.updateMovie.emit(result),
      error => console.error(error)
    )
  }

}
