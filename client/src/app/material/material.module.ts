import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * as Material from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
/*import {MatGridListModule} from '@angular/material/grid-list';


import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';*/
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
