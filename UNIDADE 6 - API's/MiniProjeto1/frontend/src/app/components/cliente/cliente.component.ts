import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

export interface Cliente {
  id_cliente: number;
  nome_cliente: string;
  email_cliente: string;
  numero_cliente: string;
  data_nascimento: string | Date; // Originalmente uma string no formato da API
}

@Component({
  selector: 'app-clientes',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
      // Mapeia os clientes e converte a data para um objeto Date
      this.clientes = data.map(cliente => ({
        ...cliente,
        data_nascimento: new Date(cliente.data_nascimento) // Converte a string em Date
      }));
    });
  }
}