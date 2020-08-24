import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetClientByIdUsecase } from 'src/app/core/usecases/client/get-client-by-id.usecase';
import { ClientModel } from 'src/app/core/domain/client/client.model';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
})
export class ClientUpdateComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private getClientByIdUsecase: GetClientByIdUsecase
  ) {}

  client: ClientModel;

  update(data: ClientMockEntity) {
    console.log(data);
    // Atualiza dados do cliente
  }
  getClientById() {
    //  Retorna cliente pelo id
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get('id'));
      this.getClientByIdUsecase.execute(param.get('id')).subscribe((client) => {
        this.client = client;
      });
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }
}
