import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import {ParentDataComponent} from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FristComponentComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'João';
  userData = {
    email: 'joao@gmail.com',
    role: 'Admin'
  };
  title = 'curso-angular';
}
