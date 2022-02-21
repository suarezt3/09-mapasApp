import { Component } from '@angular/core';


interface menuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

menuItem: menuItem[] = [
  {
    ruta: '/mapas/fullscreen',
    nombre: 'FullScreen',
  },
  {
    ruta: '/mapas/zoom-range',
    nombre: 'Zoon Range',
  },
  {
    ruta: '/mapas/marcadores',
    nombre: 'Marcadores',
  },
  {
    ruta: '/mapas/propiedades',
    nombre: 'Propiedades',
  }
]


}
