import { Component, OnInit } from '@angular/core';
import {Parking} from "../parking";
import {ParkingService} from "../parking.service";

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.scss']
})
export class AddParkingComponent implements OnInit {
  parking : Parking = new Parking('','','','');
  listParking : any ;
  constructor(private parkingS: ParkingService) { }

  ngOnInit(): void {
    let fakeArray = [
      {
        name : "Je suis un tableau ",
        category : "Fruit",
        data : ['Pomme','Poire', 'Orange']
      },
      {
        name : "Je suis un tableau ",
        category : "Legume",
        data : ['Haricot','Carrotte', 'Aubergine']
      },
      {
        name : "Je suis un tableau ",
        category : "Viande",
        data : ['Steak','Poulet', 'Veau']
      },
      {
        name : "Je suis un tableau ",
        category : "Poisson",
        data : ['Bar','Sole', 'Broche']
      },
    ];

    let fakeResult = fakeArray.filter(e => e.category == 'Legume');
    console.log(fakeResult);
    let fakeResult2 = fakeArray.map(e => e.data);
    console.log(fakeResult2)


    this.parkingS.getParking().subscribe((data:any) => {
      this.listParking = data.data;
    })

  }

  sendData(){
    this.parkingS.postParking(this.parking).subscribe(data => {
      console.log(data);
    });
  }

}
