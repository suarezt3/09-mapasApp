import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  

var map = new mapboxgl.Map({
container: 'mapa',
style: 'mapbox://styles/mapbox/streets-v11',
center: [ -76.57044872901194, 3.453486095886988 ],
zoom: 17
});
  }

}
