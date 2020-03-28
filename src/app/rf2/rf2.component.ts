import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf2',
  templateUrl: './rf2.component.html',
  styleUrls: ['./rf2.component.css']
})
export class rf2Component implements OnInit {
  lista:string[]=["Lunes","Martes","Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  lista2:string[]=["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre", "Noviembre", "Diciembre"];

  constructor() { }

  ngOnInit() {
  }

  setDia(dia: string) {
    this.diaSemana = dia
  }

  setMes(mes: string) {
    this.mesConsulta = mes
  }
}