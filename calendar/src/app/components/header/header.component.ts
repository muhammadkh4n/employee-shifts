import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: string;
  @Output() searchWeek = new EventEmitter<object>();
  @ViewChild('form') form;
  
  constructor() { }

  ngOnInit() {
    console.log(this.date);
  }

  onSearch() {
    
  }

}
