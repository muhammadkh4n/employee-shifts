import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: any;
  @Output() searchWeek = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    this.searchWeek.emit(this.date);
  }

}
