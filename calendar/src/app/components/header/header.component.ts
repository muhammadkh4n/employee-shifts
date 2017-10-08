import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: any;
  @Output() searchWeek = new EventEmitter<any>();
  error: string;
  @Input() msg: any;
  
  constructor() { }

  ngOnInit() {
  }

  dateChanged(value) {
    if (!this.date) {
      this.error = "Select a date first!";
      setTimeout(() => {
        this.error = null;
      }, 3000);
      return;
    }
    this.searchWeek.emit(this.date);
  }

}
