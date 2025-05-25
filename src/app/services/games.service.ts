import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  URL = "https://firestore-grafica-e97bd-default-rtdb.firebaseio.com/goty"


  constructor(private http: HttpClient) { 

  }

  getJuegos () {
    return this.http.get(`${this.URL}.json`)
  }

  votarJuego(juego: Game) {
    juego.votos++;
      return this.http
        .put( `${this.URL}/${juego.id}.json`, juego);
  }
}
