import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {

  constructor() { 
    console.log("ButtonsComponent");
  }

  ngOnInit(): void {
  }

}
