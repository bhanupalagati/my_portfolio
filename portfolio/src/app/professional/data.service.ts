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
    {source: 'assets/certificates/coursera/DataAnalysiswithPython.jpg', alt: 'Data Analysis with Python from Coursera'},
    {source: 'assets/certificates/coursera/what_is_data_science.jpg', alt: 'What is Data science from Coursera'},
    {source: 'assets/certificates/coursera/ToolsforDataScience.jpg', alt: 'Open Source tools from Coursera'},
    {source: 'assets/certificates/coursera/DataScienceMethodology.jpg', alt: 'Data Science Methodology from Coursera'},
    {source: 'assets/certificates/coursera/PythonforDataScience.jpg', alt: 'Python for Data Science from Coursera'},
    {source: 'assets/certificates/coursera/DatabaseforDataScience.jpg', alt: 'DataBases for Data Science from Coursera'},
    {source: 'assets/certificates/coursera/DataAnalysiswithPython.jpg', alt: 'Data Analysis with Python from Coursera'},
    {source: 'assets/certificates/coursera/VisualisationwithPython.jpg', alt: 'Data Visualization from Coursera'},
    {source: 'assets/certificates/coursera/DataAnalysiswithPython.jpg', alt: 'Data Analysis with Python from Coursera'},
    {source: 'assets/certificates/coursera/DataAnalysiswithPython.jpg', alt: 'Data Analysis with Python from Coursera'},
    {source: 'assets/certificates/udemy/machineLearning.jpg', alt: 'Machine Learning and R from Udemy'},
    {source: 'assets/certificates/udemy/tableau.jpg', alt: 'Tableau from Udemy'},
    {source: 'assets/certificates/udemy/angular.jpg', alt: 'Angular 8 from Udemy'},
    {source: 'assets/certificates/udemy/javascript.jpg', alt: 'JavaScript from Udemy'},
    {source: 'assets/certificates/udemy/Node.jpg', alt: 'Node Js from Udemy'},
    {source: 'assets/certificates/udemy/mongo.jpg', alt: 'Mongo DB from Udemy'},
    {source: 'assets/certificates/udemy/django.jpg', alt: 'Django from Udemy'},
    {source: 'assets/certificates/udemy/angular.jpg', alt: 'Angular 8 from Udemy'},
    {source: 'assets/certificates/udemy/angular.jpg', alt: 'Angular 8 from Udemy'},
    {source: 'assets/certificates/udemy/angular.jpg', alt: 'Angular 8 from Udemy'}

  ];
  private certificationRows = [
    [
      {id: 0, fheader: 'Coursera', 
      fcontent: 'IBM Data Science Professional Course', bheader: 'Description', bcontent: ''},
      {id: 1, fheader: 'Coursera', fcontent: 'What is Data Science', bheader: 'Description', bcontent: ''},
      {id: 2, fheader: 'Coursera', fcontent: 'Open Source tools for Data Science', bheader: 'Description', bcontent: ''},
      {id: 3, fheader: 'Coursera', fcontent: 'Data Science Methodology', bheader: 'Description', bcontent: ''},
    ],
    [
      {id: 4, fheader: 'Coursera', fcontent: 'Python for Data Science and AI', bheader: 'Description', bcontent: ''},
      {id: 5, fheader: 'Coursera', fcontent: 'Databases and SQL for Data Science', bheader: 'Description', bcontent: ''},
      {id: 6, fheader: 'Coursera', fcontent: 'Data Analysis with Python', bheader: 'Description', bcontent: ''},
      {id: 7, fheader: 'Coursera', fcontent: 'Data Visualization with Python', bheader: 'Description', bcontent: ''},
    ],
    [
      {id: 8, fheader: 'Coursera', fcontent: 'Machine Learning with Python', bheader: 'Description', bcontent: ''},
      {id: 9, fheader: 'Coursera', fcontent: 'Applied Data Science Capstone', bheader: 'Description', bcontent: ''},
      {id: 10, fheader: 'Udemy', fcontent: 'Machine Learning with R and Python', bheader: 'Description', bcontent: ''},
      {id: 11, fheader: 'Udemy', fcontent: 'Tableau v 20', bheader: 'Description', bcontent: ''},
    ],
    [
      {id: 12, fheader: 'Udemy', fcontent: 'Angular - The Complete Guide', bheader: 'Description', bcontent: ''},
      {id: 13, fheader: 'Udemy', fcontent: 'The Complete JavaScript', bheader: 'Description', bcontent: ''},
      {id: 14, fheader: 'Udemy', fcontent: 'Node - The Complete Guide', bheader: 'Description', bcontent: ''},
      {id: 15, fheader: 'Udemy', fcontent: 'MongoDB- The Complete Developers Guide', bheader: 'Description', bcontent: ''},
    ],
    [
      {id: 16, fheader: 'Udemy', fcontent: 'Python and Django Full Stack Bootcamp', bheader: 'Description', bcontent: ''},
      {id: 17, fheader: 'Udemy', fcontent: '', bheader: 'Description', bcontent: ''},
      {id: 18, fheader: 'Udemy', fcontent: '', bheader: 'Description', bcontent: ''},
      {id: 19, fheader: 'Udemy', fcontent: '', bheader: 'Description', bcontent: ''},
    ],

  ]
  private skills = [
    ['Machine Learning', 'Data Visualization', 'Python', 'Regression'],
    ['Classification', 'Recommendation Systems', 'Clustering', 'Deep Learning'],
    ['Angular', 'JavaScript', 'TypeScript', 'MongoDB'],
    ['Express(NODE)', 'NodeJS', 'CSS', 'HTML'],
    ['SQL', 'R', 'Django', 'Tableau'],
    ['Java', 'C', 'C++', 'C#']
  ]
  constructor() { }
  getChartOptions() {
    return this.options;
  }
  getImages(id) {
    return {...this.imgPopup[id]}
  }
  getCertifications(){
    return [...this.certificationRows];
  }
  getSkills() {
    return [...this.skills];
  }
}
