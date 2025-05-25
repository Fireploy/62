import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarrasComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
