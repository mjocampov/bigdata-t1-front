import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartsModule, WavesModule  } from 'angular-bootstrap-md';

@Component({
  selector: 'app-ra2',
  templateUrl: './ra2.component.html',
  styleUrls: ['./ra2.component.css']
})
export class ra2Component implements OnInit {
  data;
  lines;

  constructor(private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('/assets/RA2.txt', {responseType: 'text'}).subscribe((data) => {
      this.lines = data.split("\n");
      for (let line of this.lines) {
        let labels = line.split(",");
        this.chartLabels.push(labels[0]);
      }
      });
  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [162183512, 160245155, 168219357, 169363590, 164385714, 143712527, 0, 5737, 0, 442072, 250372], label: 'Winter' },
    { data: [1396853, 1549688, 1241547, 1456710, 1403838, 1243683, 0, 175, 0, 4130, 3936], label: 'Summer' },
    { data: [1890006, 1974708, 2026089, 2097972, 1993466, 1895270, 0, 0, 0, 89, 3936], label: 'Spring' },
    { data: [1467763, 1458254, 1513253, 1479269, 1412223, 915265, 0, 0, 0, 12656, 0], label: 'Fall' },
    { data: [539684, 488688, 499431, 531883, 527476, 472229, 0, 0, 0, 0, 1983], label: 'V. day' },
    { data: [2876172, 2808457, 2943196, 3325661, 2967625, 2642900, 0, 0, 0, 28340, 0], label: 'Thanksgiving' }
  ];

  public chartLabels: Array<any> = ['2009', '2010', '2011','2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(191, 239, 255, .2)',
      borderColor: 'rgba(160, 230, 255, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(141, 228, 95, .2)',
      borderColor: 'rgba(46, 207, 3, .7)',
      borderWidth: 2,
    },
     {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(216, 139, 77, .2)',
      borderColor: 'rgba(188, 81, 36, .7)',
      borderWidth: 2,
    },
     {
      backgroundColor: 'rgba(165, 18, 20, .2)',
      borderColor: 'rgba(238, 185, 178, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(222, 191, 126, .2)',
      borderColor: 'rgba(112, 54, 42, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}