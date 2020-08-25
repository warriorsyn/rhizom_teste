import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetClientByIdUsecase } from 'src/app/core/usecases/client/get-client-by-id.usecase';
import { ClientModel } from 'src/app/core/domain/client/client.model';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';
import { UpdateClientUsecase } from 'src/app/core/usecases/client/update-client.usecase';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
})
export class ClientUpdateComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private getClientByIdUsecase: GetClientByIdUsecase,
    private updateClientUsecase: UpdateClientUsecase,
    private router: Router
  ) {}

  client: ClientModel;

  update(data: ClientMockEntity) {
    // Atualiza dados do cliente
    this.updateClientUsecase.execute(data);
    this.router.navigate(['cliente']);
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
