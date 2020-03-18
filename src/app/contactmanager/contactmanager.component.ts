import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager',
  template: `
  <app-side-nav></app-side-nav>
  `,
  styleUrls: ['./contactmanager.component.scss']
})
export class ContactmanagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
