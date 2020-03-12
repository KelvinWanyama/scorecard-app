import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period-dialog',
  templateUrl: './period-dialog.component.html',
  styleUrls: ['./period-dialog.component.css']
})
export class PeriodDialogComponent implements OnInit {
  periodFilterConfig = [];
  bottleneckPeriodType = 'year';
  selectedPeriods = [];
  constructor() { }

  ngOnInit() {
  }
  onFilterUpdate($event, action: string) {

  }

}
