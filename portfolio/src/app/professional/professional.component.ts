import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  options: any;
  skills: any
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.options = {...this.dataService.getChartOptions()};
    this.skills = this.dataService.getSkills();
  }

  openUrl(loc) {
    window.open(loc, "_blank");
  }




}
