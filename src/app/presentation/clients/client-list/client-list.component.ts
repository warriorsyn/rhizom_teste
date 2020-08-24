import { Component, OnInit } from '@angular/core';
import { GetAllCarbrandUsecase } from 'src/app/core/usecases/get-all-carbrand.usecase';
import { GetAllClientsUsecase } from 'src/app/core/usecases/client/get-all-clients.usecase';
import { ClientModel } from 'src/app/core/domain/client/client.model';
import { DeleteClientUsecase } from 'src/app/core/usecases/client/delete-client.usecase';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients: ClientModel[] = [];
  constructor(
    private getAllCarbrandUsecase: GetAllCarbrandUsecase,
    private getAllClientsUsecase: GetAllClientsUsecase,
    private deleteClientsUsecase: DeleteClientUsecase
  ) {}

  getAllClients() {
    return this.getAllClientsUsecase.execute(null).subscribe((client) => {
      this.clients.push(client);
    });
  }

  deleteClient(id: string) {
    console.log(id);
    this.deleteClientsUsecase.execute(id);
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === id) {
        this.clients.splice(i, 1);
      }
    }
  }
  ngOnInit(): void {
    this.getAllClients();
    this.getAllCarbrandUsecase.execute(null).subscribe((val) => {});
  }
}
