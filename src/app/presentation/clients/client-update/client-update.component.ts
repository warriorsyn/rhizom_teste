import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
})
export class ClientUpdateComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  getClientById() {
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get('id'));
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }
}
