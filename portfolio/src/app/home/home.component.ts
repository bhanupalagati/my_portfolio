import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }

}
