import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddParkingComponent} from "./add-parking/add-parking.component";
import {MovieComponent} from "./movie/movie.component";
import {DetailMovieComponent} from "./movie/detail-movie/detail-movie.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: MovieComponent
  }, {
    path: 'detail/:id',
    component: DetailMovieComponent
  },
  {
    path: 'add-parking',
    component: AddParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
