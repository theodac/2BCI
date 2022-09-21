import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  listMovie : any = [];
  saveListMovie:any;
  constructor(private movieS: MovieService) { }

  ngOnInit(): void {
    this.getMovie();
    console.log(this.listMovie);
  }

  async getMovie(){
    this.listMovie = await  this.movieS.getAll();
    this.saveListMovie = this.listMovie;
    this.listMovie = this.listMovie.sort(function (a:any,b:any){

      return <any>new Date(b.release_date) - <any>new Date(a.release_date);
    })

  }
  onChange(event:any){
    this.listMovie = this.saveListMovie;
    if(event.value == 'desc'){
      this.listMovie = this.listMovie.sort(function (a:any,b:any){
        return a.popularity - b.popularity;
      });
    }else if(event.value == 'asc'){
      this.listMovie = this.listMovie.sort(function (a:any,b:any){
        return b.popularity - a.popularity;
      });
    }
  }


}
