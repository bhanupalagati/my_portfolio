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
            y: 100,
          },
          {
            name: "U.G. Aggregate",
            y: 97.3,
          }
        ]
      }
    ],
  };
  private imgPopup = [
    {source: 'assets/certificates/coursera/ProfessionalDegree.jpg', alt: 'Amalgamation of nine courses with advanced machine learning techniques'},
    {source: 'assets/certificates/coursera/what_is_data_science.jpg', alt: 'What is Data science from Coursera'},
    {source: 'assets/certificates/coursera/ToolsforDataScience.jpg', alt: 'Open Source tools from Coursera'},
    {source: 'assets/certificates/coursera/DataScienceMethodology.jpg', alt: 'Data Science Methodology from Coursera'},
    {source: 'assets/certificates/coursera/PythonforDataScience.jpg', alt: 'Python for Data Science from Coursera'},
    {source: 'assets/certificates/coursera/DatabaseforDataScience.jpg', alt: 'DataBases for Data Science from Coursera'},
    {source: 'assets/certificates/coursera/DataAnalysiswithPython.jpg', alt: 'Data Analysis with Python from Coursera'},
    {source: 'assets/certificates/coursera/VisualisationwithPython.jpg', alt: 'Data Visualization from Coursera'},
    {source: 'assets/certificates/coursera/MachineLearningwithPython.jpg', alt: 'Elucidating various ways of using Machine Learning techniques'},
    {source: 'assets/certificates/coursera/AppliedDataScience.jpg', alt: 'Astounding projects with applied data science'},
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
      fcontent: 'IBM Data Science Professional Course', bheader: 'Description',
      bcontent: 'This is an amalgamation of nine courses in coursera. This is provided by IBM and regarded as one of the best professional degree course in coursera. The best part is one has to score more than 80% in order to get the certificate and that will be challenging.'},
      {id: 1, fheader: 'Coursera', fcontent: 'What is Data Science', bheader: 'Description',
      bcontent: 'A proper and motivating introduction is vital in order to create interest in the field of study. This course did an stupendous job in that arena by use the 100% real-world examples along with the pros and cons.'},
      {id: 2, fheader: 'Coursera', fcontent: 'Open Source tools for Data Science', bheader: 'Description',
      bcontent: 'Anyone can do a job with hard-work. Albeit a person having proper tools to accomplish a job can do an astonishing job in a stipulated amount of time. This course will empower a data science enthusiast with various online working platforms'},
      {id: 3, fheader: 'Coursera', fcontent: 'Data Science Methodology', bheader: 'Description',
      bcontent: "One has to question the other in order to make progress in the process of creating a Machine Learning model i.e., appropriate for the customer needs. However, a lot don't know the order of gathering information. This course wil equip the student with the proper model building methodology."},
    ],
    [
      {id: 4, fheader: 'Coursera', fcontent: 'Python for Data Science and AI', bheader: 'Description',
      bcontent: 'Albeit Python is a widely used common programming language, it will be completely different when one creating a statistical model. This course will show the statistical packages and prompt use of those in order to create an efficient yet simple model.'},
      {id: 5, fheader: 'Coursera', fcontent: 'Databases and SQL for Data Science', bheader: 'Description',
      bcontent: 'Data science is not more than understanding and using data. Plausibly that data would be in huge amounts, as a result, one needs a database management system to properly manage and facilitate data extraction. This course provides comprehensive knowledge on SQL and cloud platforms supporting it.'},
      {id: 6, fheader: 'Coursera', fcontent: 'Data Analysis with Python', bheader: 'Description',
      bcontent: 'This is an extension on the course Python for Data Science and AI. This goes in-depth with various features of Pandas, Numpy, Scipy, Scikit-learn and many more. With this knowledge a model developer can be quick at understanding various algorithms moreover he can write one.'},
      {id: 7, fheader: 'Coursera', fcontent: 'Data Visualization with Python', bheader: 'Description',
      bcontent: 'A data scientist can get a lot of insights from numbers. But we cannot expect other people to understand the numbers in the same way. So, we need another way to tell the story to others and it is nothing but Data Visualization. This course equips one with art of telling story using Visualizations.'},
    ],
    [
      {id: 8, fheader: 'Coursera', fcontent: 'Machine Learning with Python', bheader: 'Description',
      bcontent: 'This course has almost covered every conspicuous algorithm with code and usage. It starts from basics and covers Regression, Classification, Clustering, Recommendation Systems. This course is a project oriented one and includes a project with every algorithm which sums up to 20 of them.'},
      {id: 9, fheader: 'Coursera', fcontent: 'Applied Data Science Capstone', bheader: 'Description',
      bcontent: 'This is the capstone project. The main aim of this one is to make the learner to complete a real time level project. Moreover, it also talks about various geographical APIs. In addition, one has to create a model, presentation and a report in order to complete the course. To be honest this is one of the challenging and interesting one.'},
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
