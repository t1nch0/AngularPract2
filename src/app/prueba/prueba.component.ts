import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  bandera: boolean;
  constructor() {
    this.bandera = false;
  }

  ngOnInit() {
  }
  funcionp() {
    this.bandera = !this.bandera;
  }
}
