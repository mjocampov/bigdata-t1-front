import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf1',
  templateUrl: './rf1.component.html',
  styleUrls: ['./rf1.component.css']
})
export class rf1Component implements OnInit {
  horaInicio = "HH:mm:ss"
  horaFin = "HH:mm:ss"

  constructor() { }

  ngOnInit() {
  }

  setInicio(inicio: string) {
    this.horaInicio = inicio
  }

  setFin(fin: string) {
    this.horaFin = fin
  }

}