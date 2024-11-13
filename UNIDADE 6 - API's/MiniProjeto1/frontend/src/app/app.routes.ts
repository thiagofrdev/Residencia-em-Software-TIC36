import { Routes } from '@angular/router';
import { ClientesComponent } from '../app/components/cliente/cliente.component';
// Outros imports...

export const appRoutes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  // Outras rotas, como produtos e pedidos...
];