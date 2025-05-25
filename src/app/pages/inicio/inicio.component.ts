import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnDestroy, OnInit{
  juegos: any[] = []
  intervalo: any;

  constructor(private _gs: GamesService) {
    this.cargarJuegos()
  }
  
  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      if(this.juegos.length != 0){
        this.juegos = []
        this.cargarJuegos()
      }
    }, 5000);
    
  }

  ngOnDestroy(): void {
    this.intervalo.unsubscribe();
  }

  cargarJuegos() {
    this._gs.getJuegos().subscribe(( data ) => {
      this.juegos = Object.values(data)
      console.log(this.juegos)
    })
  }

}
