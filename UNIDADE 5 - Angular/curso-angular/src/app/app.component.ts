import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import {ParentDataComponent} from "./components/parent-data/parent-data.component";
import {DirectivesComponent} from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventsComponent } from "./components/events/events.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FristComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventsComponent, EmitterComponent, ListRenderComponent],
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
