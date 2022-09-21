import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = "https://api.themoviedb.org/3/movie";
  constructor(private http: HttpClient) { }

  getAll(){

    return new Promise(resolve => {
      this.http.get(`${this.url}/popular?api_key=4e039b4ce58370b07f5af5036fee8c65&language=en-US&page=1`).subscribe((data:any) => {
        resolve(data.results);
      })
    })
  }

  getOne(id:any){
    return new Promise(resolve => {
      this.http.get(`${this.url}/${id}?api_key=4e039b4ce58370b07f5af5036fee8c65&language=en-US&page=1`).subscribe((data:any) => {
        console.log(data);
        resolve(data);
      })
    })
  }
}
