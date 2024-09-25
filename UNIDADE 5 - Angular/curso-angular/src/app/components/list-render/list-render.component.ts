import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals=[
    {name: 'Mel', type: 'Cachorro'},
    {name: 'Jurema', type: 'Capivara'},
    {name: 'Edleusa', type: 'Tartaruga'},
    {name: 'Gatonso', type: 'Gato'}
  ];
}
