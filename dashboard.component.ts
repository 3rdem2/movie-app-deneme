import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie []=[];
  movieLenght:number;

  constructor(private moviesService : MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() : void {
    this.moviesService.getMovies()
               .subscribe(movies => {
                this.movies = movies.slice(0,5);
                this.movieLenght = movies.length;
              })
  }
}
