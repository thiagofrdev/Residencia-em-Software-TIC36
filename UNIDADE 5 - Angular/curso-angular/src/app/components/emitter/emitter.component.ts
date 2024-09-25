import { Component } from '@angular/core';
import { ChangeNumberComponent } from "../change-number/change-number.component";

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber(){
    //this.myNumber++;
    this.myNumber = Math.floor(Math.random()*100)
  }
}
