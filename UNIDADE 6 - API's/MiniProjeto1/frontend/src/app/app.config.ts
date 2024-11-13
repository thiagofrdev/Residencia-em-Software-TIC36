import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ClientesComponent } from './components/cliente/cliente.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'clientes', component: ClientesComponent },
      // Outras rotas aqui, como 'produtos' e 'pedidos'
    ])
  ]
};