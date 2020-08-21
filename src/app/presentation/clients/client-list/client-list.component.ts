import { Component, OnInit } from '@angular/core';
import { GetAllCarbrandUsecase } from 'src/app/core/usecases/get-all-carbrand.usecase';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  periodos: { items: [] } = { items: [] };
  constructor(private getAllCarbrandUsecase: GetAllCarbrandUsecase) {}

  ngOnInit(): void {
    this.getAllCarbrandUsecase.execute(null).subscribe((val) => {});
  }
}
