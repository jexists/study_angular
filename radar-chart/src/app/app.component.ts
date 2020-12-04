import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  // ngOnInit() {
  // }

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Talk', 'Talk Comment', 'Market', 'Market Comment'];

  public radarChartData: ChartDataSets[] = [
    { data: [40, 29, 20, 36] }
    // { data: [0, 1, 2, 3, 4, 5, 6], label: '' }
  ];

}