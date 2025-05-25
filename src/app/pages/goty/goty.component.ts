import { Component } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.css'
})
export class GotyComponent {

  juegos: Game[] = [];

  constructor(private _gs : GamesService) {

  }
  ngOnInit() {

    this._gs.getJuegos()
      .subscribe( juegos => {
        console.log(juegos);
        this.juegos = Object.values(juegos);
      });
  }

  votarJuego( juego: Game ) {
    
    this._gs.votarJuego( juego )
      .subscribe( () => Swal.fire(`Gracias por votar por `, `${juego.nombre}`));

  }
}
