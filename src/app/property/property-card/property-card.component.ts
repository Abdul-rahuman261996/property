import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  Property: any = {
    Id: 1,
    Type: 'House',
    price: 12000,
    Name: 'Birla House'
  }

  ngOnInit() {
  }

}
