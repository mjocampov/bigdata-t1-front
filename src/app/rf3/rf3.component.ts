import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf3',
  templateUrl: './rf3.component.html',
  styleUrls: ['./rf3.component.css']
})
export class rf3Component implements OnInit {
  horaInicio = "HH:mm:ss"
  horaFin = "HH:mm:ss"
  numSitios = "N"

  constructor() { }

  ngOnInit() {
  }

  setN(n: string) {
    this.numSitios = n
  }

  setInicio(inicio: string) {
    this.horaInicio = inicio
  }

  setFin(fin: string) {
    this.horaFin = fin
  }

}