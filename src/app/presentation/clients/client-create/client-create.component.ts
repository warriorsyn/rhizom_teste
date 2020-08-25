import { Component, OnInit } from '@angular/core';
import { AddClientUsecase } from 'src/app/core/usecases/client/add-client.usecase';
import { Router } from '@angular/router';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {
  constructor(
    private addClientUsecase: AddClientUsecase,
    private router: Router
  ) {}

  create(data: ClientMockEntity) {
    // Cadastra um novo cliente
    this.addClientUsecase.execute(data);
    this.router.navigate(['cliente']);
  }

  ngOnInit(): void {}
}
