import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    MaterialModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
