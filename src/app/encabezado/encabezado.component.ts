import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  nombreCompleto = "Yeiko Muñoz Araya";
  cargo = "Desarrollador web Front-End";
  
  constructor() { }

  ngOnInit(): void {
  }

}
