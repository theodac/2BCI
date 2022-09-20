import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Parking} from "./parking";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  url  = 'http://localhost:3000/parkings';
  constructor(private http:  HttpClient) { }

  postParking(parking: Parking){
    return this.http.post(this.url + '/postPark', {
      nom : parking.name,
      lieu: parking.place,
      creation_date: parking.creation_date,
      capacity: parking.capacity
    });
  }

  getParking(){
    return this.http.get(this.url + '/getPark');
  }
}
