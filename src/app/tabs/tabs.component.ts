import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  perfil: string = '';
  habilidades: any[] = [];
  titulos: string = '';
  experiencia: string = '';
  aptitudes: any[];
  idiomas: string = '';
  disponibilidad: string = '';
  contacto: any[];
  proyectoGitHub: string = '';
  paginaWeb: string = '';
  linkedIn: string = '';

  constructor(private _serv: DatosService) {
     this.perfil = this._serv.perfil;
     this.habilidades = this._serv.obtenerHabilidades();
     this.titulos = this._serv.titulos;
     this.experiencia = this._serv.experiencia;
     this.idiomas = this._serv.idiomas;
     this.disponibilidad = this._serv.disponibilidad;
     this.proyectoGitHub = this._serv.proyectoGitHub;
     this.paginaWeb = this._serv.paginaWeb;
     this.aptitudes = this._serv.obtenerAptitudes();
     this.contacto = this._serv.obtenerContacto();
     this.linkedIn = this._serv.linkedIn;
   }

  ngOnInit(): void {
  }

}
