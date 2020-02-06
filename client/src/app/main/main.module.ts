import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ApiService } from '../api.service';
import { MainComponent } from './main.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [MainComponent, MovieListComponent, MovieFormComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
