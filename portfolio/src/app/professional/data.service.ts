import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private options = {
    title: { text: 'My Education Scores out of 100' },
    chart: {
      type: 'column'
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of 100<br/>'
  },
  xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Score Ranges'
    }

},
legend: {
  enabled: false
},
plotOptions: {
series: {
    borderWidth: 0,
    dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
    }
}
},
    series: [
      {
        name: "Educational Scores",
        colorByPoint: true,
        data: [
          {
            name: "High School",
            y: 92,
          },
          {
            name: "Intermediate",
            y: 94.5,
          },
          {
            name: "U.G. SEM1",
            y: 97,
          },
          {
            name: "U.G. SEM2",
            y: 98,
          },
          {
            name: "U.G. SEM3",
            y: 95,
          },
          {
            name: "U.G. SEM4",
            y: 96,
          },
          {
            name: "U.G. SEM5",
            y: 94,
          },
          {
            name: "U.G. SEM6",
            y: 95,
          },
          {
            name: "U.G. SEM7",
            y: 97,
          },
          {
            name: "U.G. SEM8",
            y: 98,
          }
        ]
      }
    ],
  };
  private imgPopup = [
    {source: 'assets/homePic.jpg', alt:'This is alternative text'}
  ]
  constructor() { }
  getChartOptions() {
    return this.options;
  }
  getImages(id) {
    return {...this.imgPopup[id]}
  }
}
