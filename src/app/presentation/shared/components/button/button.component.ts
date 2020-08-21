import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() type = 'button';

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
