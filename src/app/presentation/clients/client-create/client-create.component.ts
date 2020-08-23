import { Component, OnInit } from '@angular/core';
import { AddClientUsecase } from 'src/app/core/usecases/client/add-client.usecase';
import { Router } from '@angular/router';

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

  create(data) {
    this.addClientUsecase.execute(data).subscribe(() => {});
    this.router.navigate(['cliente']);
    // console.log(data);
  }

  ngOnInit(): void {}
}
