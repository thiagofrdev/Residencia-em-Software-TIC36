import { Component } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  standalone: true,
  imports: [],
  templateUrl: './frist-component.component.html',
  styleUrl: './frist-component.component.css'
})
export class FristComponentComponent {
  nome:string = "Thiago";
  idade:number = 20;
  emprego = "Estudante";
  hobbies = ["Nadar", "Pescar", "Estudar", "Academia"];
  carro = {
    nome: "Audi TT",
    ano: 2017
  }
}
