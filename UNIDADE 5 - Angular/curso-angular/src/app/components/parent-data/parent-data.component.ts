import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name:string=""; //O @Input recebe o dado do Pai
  @Input() userInformation!:{email:string, role:string}; // A "!" é para dizer que o objeto ainda será instanciado. Se tirar, irá causar um erro
}
