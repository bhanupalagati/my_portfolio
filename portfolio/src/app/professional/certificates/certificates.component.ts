import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  imgPopup: {source: string, alt: string};
  showPopup = false;
  rows: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.rows = this.dataService.getCertifications();
  }

  getClickedImage(id){
    this.imgPopup = this.dataService.getImages(id);
    this.showPopup = true;
  }
}
