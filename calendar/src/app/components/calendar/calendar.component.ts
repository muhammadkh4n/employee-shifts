import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { SlotService } from '../../services/slot.service';
import { StaffService } from '../../services/staff.service';

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
  
  constructor(private Shop: ShopService,
              private Slot: SlotService,
              private Staff: StaffService) { }

  ngOnInit() {
    this.getShops();
    this.getSlots();
    this.getStaffs();
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
        slots: []
      });
    }
    console.log("WEEK", this.week);
  }

  staffChanged(staff) {
    console.log(staff)
  }

  addStaff(index) {
    console.log("HEYYYYYYy");
    this.week.shops[index].staffs.push({
      name: '',
      title: '',
      slots: []
    });
  }

}
