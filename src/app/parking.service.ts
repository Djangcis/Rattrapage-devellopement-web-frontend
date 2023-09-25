import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkinginfo';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient : HttpClient) { }

  getParkings() : Observable<ParkingInfo []>{

/* supprimé pour mettre en place 1 observable, car attnte de rep asynchrone
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
    let parkings = [];
    parkings.push(parking1);
    parkings.push(parking2);
    parkings.push(parking3);
    */
  
    return this.httpClient.get<ParkingInfo[]>('http://localhost:8080/api/parkings');
  }
}
