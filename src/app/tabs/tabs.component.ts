import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  perfil: string = '';
  habilidades: any[] = [];

  constructor(private _serv: DatosService) {
     this.perfil = this._serv.perfil;
     this.habilidades = this._serv.obtenerHabilidades();
   }

  ngOnInit(): void {
  }

}
