import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

perfil: string = 'Soy un estudiante universitario cursando la carrera de bachillerato en Ingeniería Informática en la UNED, (solo me falta la práctica semestral para terminar mis estudios). Me considero una persona con muchos deseos de superación y con una gran pasión en el mundo del desarrollo web.'
titulos: string = 'Diploma en informática - (2015 - 2019)';

habilidades: any[] = [
  
  {icono: 'fab fa-html5', nom: 'HTML 5'},
  {icono: 'fab fa-css3-alt', nom: 'CSS3'},
  {icono: 'fab fa-js-square', nom: 'Javascript'},
  {icono: 'fab fa-html5', nom: 'Jquery'},
  {icono: 'fab fa-bootstrap', nom: 'Bootstrap'},
  {icono: 'fab fa-sass', nom: 'SASS'},
  {icono: 'fab fa-html5', nom: 'JSON'},
  {icono: 'fab fa-html5', nom: 'Diseño adaptable'},
  {icono: 'fab fa-angular', nom: 'Angular'},
  {icono: 'fab fa-php', nom: 'PHP'},
  {icono: 'fab fa-angular', nom: 'ASP.NET'},
  {icono: 'fab fa-angular', nom: 'C#'},
  {icono: 'fas fa-database', nom: 'Sql server y My-sql'},
  {icono: 'fab fa-git-alt', nom: 'Git'},
  {icono: 'fab fa-github', nom: 'GitHub'},
  {icono: 'fab fa-angular', nom: 'Apps de escritorio'},
  {icono: 'fab fa-java', nom: 'Java'},
  {icono: 'fab fa-angular', nom: 'Contabilidad Básica'},
  {icono: 'fab fa-windows', nom: 'Windows'},
  {icono: 'fab fa-angular', nom: 'MS Office'}
  

]

experiencia: string = '2013-2021 - Bazar el Pino (Negocio familiar) - Atención al cliente.';

aptitudes: any[] = ['Trabajo en equipo', 'Seriedad', 'Responsabilidad', 'Compromiso', 'Creatividad', 'Puntualidad',
                    'Aprendizaje', 'Adaptabilidad'];

idiomas: string = 'Inglés - Intermedio B1, Español: Nativo'
disponibilidad: string = 'Inmediata';

contacto: any[] = [
  {icono: 'fas fa-phone-alt', dato: 83339005, id: 'Telefono:'},
  {icono: 'far fa-envelope', dato: 'yeimaraya91@gmail.com', id: 'Correo Electrónico:'},
  {icono: 'fab fa-linkedin', dato: '', id:'LinkedIn:'},
  {icono: 'fas fa-map-marker', dato: 'San josé, Desamparados, Loma linda', id: 'Residencia:'}
]

proyectoGitHub: string = 'asasasasas';
paginaWeb: string = 'https://jay-codes91.github.io/zona-animal/';

obtenerHabilidades(){
  return this.habilidades;
}

obtenerAptitudes(){
  return this.aptitudes;
}

obtenerContacto(){
  return this.contacto;
}

}//class
