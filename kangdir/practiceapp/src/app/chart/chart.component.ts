import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 200, 260, 700], label: 'Account A' },
    { data: [120, 200, 100, 340], label: 'Account B' },
    { data: [45, 200, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
