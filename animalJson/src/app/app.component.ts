import { Component } from '@angular/core';
import { Movie } from './app.movie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 selectedMovie = null;

 sourceMovieList: Array<Movie> = new Array<Movie>();
 movieList: Array<Movie> = new Array<Movie>();
 movieJsonList= [{
            'id': 1,
            'movie_name': 'Coraline',
            'price': '7.13',
            'movie_date': '7/9/2017'
        }, {
            'id': 2,
            'movie_name': 'Finding Dory',
            'price': '10.09',
            'movie_date': '12/12/2016'
        }, {
            'id': 3,
            'movie_name': 'The Wailing',
            'price': '10.69',
            'movie_date': '3/9/2017'
        }, {
            'id': 4,
            'movie_name': 'The Void',
            'price': '8.85',
            'movie_date': '10/30/2017'
        }, {
            'id': 5,
            'movie_name': 'Tower',
            'price': '8.47',
            'movie_date': '4/6/2017'
        }];

        constructor() {
          for (let i = 0; i < this.movieJsonList.length; i++) {
            this.sourceMovieList[i] = new Movie();
            Object.assign( this.sourceMovieList[i], this.movieJsonList[i]);
          }

          this.movieList = this.sourceMovieList;
        }

less= (x: Movie): boolean => x.price < 9;
// tslint:disable-next-line:arrow-return-shorthand
more= (x: Movie): boolean => {return x.price > 9; };

        filterMovies(funcParam: any) {
            this.movieList = this.sourceMovieList.filter(funcParam);
        }


  selectItem(movie: any): void {
    this.selectedMovie = movie;
  }
}
