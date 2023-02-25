import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesListRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 ]
})
export class MoviesListModule { }
