import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Series 1',
          data: [20, 100, 40, 30, 80, 33]
        }
      ],
      chart: {
        height: 350,
        type: 'radar'
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            // strokeColor: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      colors: ['#FF4560'],
      // markers: {
      //   size: 4,
      //   colors: ['#fff'],
      //   strokeColors: ['#FF4560'],
      //   strokeWidth: 2
      // },
      tooltip: {
        y: {
          formatter(val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ]
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          // formatter(val, i) {
          //   if (i % 2 === 0) {
          //     return val;
          //   } else {
          //     return '';
          //   }
          // }
        }
      }
    };
  }
}
