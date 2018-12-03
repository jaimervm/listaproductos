import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productos-angular-lab';
datos = [
  {codigo:1,descripcion: "papas", precio:10.55},
  {codigo:2,descripcion: "manzanas", precio:2.55},
  {codigo:3,descripcion: "melon", precio:10.55},
  {codigo:4,descripcion: "cebollas", precio:10.55},
  {codigo:5,descripcion: "calabaza", precio:10.55},
]

}
