import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrl: './grafico-barras.component.css'
})
export class GraficoBarrasComponent implements OnInit {
  @Input() juegos: any[] = [];
  juegosCargados: boolean = false

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';
  colorScheme = 'nightLights'

  onSelect(event: any) {
    console.log(event);
  }

  constructor() {
   
  }

  ngOnInit(): void {
    this.cargarJuegosGrafico()
    this.juegosCargados = true
  }

  cargarJuegosGrafico() {
    let results: any[] = []
    this.juegos.forEach((value) => {
      results.push({
        name: value.nombre,
        value: value.votos
      })
    })
    this.juegos = results
  }
}
