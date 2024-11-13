import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../../services/list.service';

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

  constructor(private listService: ListService){}//Criação de um servço 

  animalsDetails = '';
  showAge(animal: Animal){
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    console.log('Removendo ')
  }
}
