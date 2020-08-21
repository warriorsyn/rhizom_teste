import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor() {}

  moment: any = moment;

  @Input() message: string;

  @Input() data: string;

  @Input() type = 'success';

  ngOnInit(): void {}
}
