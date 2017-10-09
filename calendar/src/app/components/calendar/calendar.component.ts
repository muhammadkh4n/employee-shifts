import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { SlotService } from '../../services/slot.service';
import { StaffService } from '../../services/staff.service';
import { WeekService } from '../../services/week.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  shops: Array<object> = [];
  slots: Array<object> = [];
  staffs: Array<object> = [];
  week: any = {};
  msg: any;
  update: any;
  weekDate: string;
  showDate: string;
  
  constructor(private Shop: ShopService,
              private Slot: SlotService,
              private Staff: StaffService,
              private Week: WeekService) { }

  ngOnInit() {
    this.getShops();
    this.getSlots();
    this.getStaffs();
  }

  doSearch(moment) {
    this.showDate = moment.format('MMM Do, YYYY');
    this.weekDate = moment.week()+"-"+moment.month()+"-"+moment.year();
    this.Week.getWeek(this.weekDate)
      .subscribe(res => {
        this.update = true;
        console.log("WEEK", res);
        this.week = res;
      }, err => {
        this.update = false;
        this.initWeek();
        this.week.starting_date = this.weekDate;
        console.log("SEARCH ERROR", err.json());
        this.msg = err.json();
        setTimeout(() => {
          this.msg = null;
        }, 3000);
      });
  }

  getShops() {
    this.Shop.getShops()
      .subscribe(res => {
        this.shops = res;
        this.initWeek();
        console.log("SHOPS", res);
      });
  }

  getSlots() {
    this.Slot.getSlots()
      .subscribe(res => {
        this.slots = res;
        console.log("SLOTS", res);
      });
  }

  getStaffs() {
    this.Staff.getStaffs()
      .subscribe(res => {
        this.staffs = res;
        console.log("STAFFS", res);
      });
  }

  initWeek() {
    this.week.shops = [];
    for (let shop of this.shops) {
      this.week.shops.push({
        name: '',
        staffs: [],
      });
    }
    console.log("WEEK", this.week);
  }

  weekDeleted(isDeleted) {
    if (isDeleted) {
      this.update = false;
      this.initWeek();
      this.week.starting_date = this.weekDate;
    }
  }

  staffChanged(staff) {
    console.log(staff)
  }

  addStaff(index) {
    this.week.shops[index].staffs.push({
      name: '',
      slots: ["","","","","","",""]
    });
  }

  removeStaff(shop, index) {
    this.week.shops[shop].staffs.splice(index, 1);
  }

}
