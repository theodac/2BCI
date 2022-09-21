import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  movie : any;
  id : any ;
  constructor(private movieS: MovieService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieS.getOne(this.id).then(data => {
      this.movie = data;
      console.log(this.movie);
    })
  }

}
