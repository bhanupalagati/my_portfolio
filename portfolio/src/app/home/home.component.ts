import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latitude = 17.368828;
  longitude = 78.392936;
  constructor() { }

  ngOnInit(): void {
  }

}
