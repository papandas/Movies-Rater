import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  movieForm;
  movieId = null;

  @Input() set movie(val: Movie) {
    this.movieId = val.id;
    this.movieForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    })
  }

  @Output() refreshMovieList = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submitForm() {
    //console.log(this.movieForm.value)
    if (this.movieId) {
      this.apiService.updateMovie(this.movieId, this.movieForm.value.title, this.movieForm.value.description).subscribe(
        results => {
          this.movieForm.reset();
          this.refreshMovieList.emit();
        },
        error => console.error(error)
      )
    } else {
      this.apiService.createMovie(this.movieForm.value.title, this.movieForm.value.description).subscribe(
        results => {
          this.movieForm.reset();
          this.refreshMovieList.emit();
        },
        error => console.error(error)
      )
    }
  }
}
