import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  options: any;
  imgPopup: {source: string, alt: string};
  constructor(private dataService: DataService) { }
  showPopup = false;
  ngOnInit(): void {
    this.options = {...this.dataService.getChartOptions()};
  }

  openUrl(loc) {
    window.open(loc, "_blank");
  }
  getClickedImage(id){
    this.imgPopup = this.dataService.getImages(id);
    this.showPopup = true;
  }


}
