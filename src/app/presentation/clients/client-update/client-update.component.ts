import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetClientByIdUsecase } from 'src/app/core/usecases/client/get-client-by-id.usecase';

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

  getClientById() {
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get('id'));
      this.getClientByIdUsecase.execute(param.get('id')).subscribe((client) => {
        console.log(client);
      });
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }
}
