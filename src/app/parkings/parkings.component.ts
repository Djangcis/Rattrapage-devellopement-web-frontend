import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkinginfo';
import { ParkingService } from '../parking.service';
@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit{
  
  parkings: ParkingInfo[] = []; 
  constructor(private parkingService : ParkingService)  {
    
  }

  ngOnInit(): void {
 this.parkingService.getParkings().subscribe(

  reponse => {
    this.parkings = reponse;
  }
 );

/*
    let parking1: ParkingInfo = {
      id:1,
      nom: 'parking 1',
      nbPlaceDispo: 40,
      nbPlaceTotal:300,
      statut: 'ouvert',
      heureMaj: '18h10'


    }

    let parking2: ParkingInfo = {
      id:1,
      nom: 'parking 2',
      nbPlaceDispo: 100,
      nbPlaceTotal:200,
      statut: 'ouvert',
      heureMaj: '19h10'
    }


    let parking3: ParkingInfo = {
      id:1,
      nom: 'parking 3',
      nbPlaceDispo: 40,
      nbPlaceTotal:50,
      statut: 'FERME',
      heureMaj: '20H10'
    }

    this.parkings.push(parking1);
    this.parkings.push(parking2);
    this.parkings.push(parking3);
    */
  }

  
  


}
