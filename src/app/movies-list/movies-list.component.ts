import { Component, OnInit } from '@angular/core';
import { moviesData } from 'src/assets/movies.const';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
moviesList:any=[]
  constructor() { }

  ngOnInit(): void {
    this.moviesList =moviesData
  }

}
