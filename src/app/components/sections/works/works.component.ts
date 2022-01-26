import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public workFilter: string;
  public singleGallery1: any;
  public albums: any = [];

  constructor() {
    this.workFilter = 'all';
  }

  ngOnInit(): void {
  }

  onChange (e) {
    this.workFilter = e.target.value;
  }

}
