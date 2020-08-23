import { Component, OnInit } from '@angular/core';
import { GetAllCarbrandUsecase } from 'src/app/core/usecases/get-all-carbrand.usecase';
import { GetAllClientsUsecase } from 'src/app/core/usecases/client/get-all-clients.usecase';
import { ClientModel } from 'src/app/core/domain/client/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients: ClientModel[] = [];
  constructor(
    private getAllCarbrandUsecase: GetAllCarbrandUsecase,
    private getAllClientsUsecase: GetAllClientsUsecase
  ) {}

  getAllClients() {
    return this.getAllClientsUsecase.execute(null).subscribe((client) => {
      this.clients.push(client);
    });
  }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllCarbrandUsecase.execute(null).subscribe((val) => {});
  }
}
