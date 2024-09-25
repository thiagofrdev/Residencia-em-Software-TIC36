import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Animal {
  name: string
  type: string
  age: number
}

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[]=[
    {name: 'Mel', type: 'Cachorro', age: 3},
    {name: 'Jurema', type: 'Capivara', age: 5},
    {name: 'Edleusa', type: 'Tartaruga', age: 7},
    {name: 'Gatonso', type: 'Gato', age: 2}
  ];

  animalsDetails = '';
  showAge(animal: Animal){
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
