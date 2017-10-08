import { Component, OnInit, Input } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { StaffService } from '../../services/staff.service'
import { SlotService } from '../../services/slot.service';
import { WeekService } from '../../services/week.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() week: any;
  @Input() isUpdate: any;
  
  show: boolean = false;
  modalType: string;
  stuff: any = [];
  error: string;
  msg: string;
  
  constructor(private Shop: ShopService,
              private Staff: StaffService,
              private Slot: SlotService,
              private Week: WeekService) { }

  ngOnInit() {
  }

  formModal(cat: string): void {
    this.getStuff(cat);
    this.modalType = cat;
  }

  saveWeek() {
    if (!this.week.starting_date) {
      this.error = "Set date first to save!";
      setTimeout(() => {
        this.error = null;
      }, 3000);
      return;
    }
    delete this.week._id
    this.Week.saveWeek(this.week)
      .subscribe(res => {
        console.log("SAVED WEEK", res);
        this.msg = "SAVED!"
        setTimeout(() => {
          this.msg = null;
        }, 3000);
      });
  }

  updateWeek() {
    delete this.week._id;
    this.Week.updateWeek(this.week)
      .subscribe(res => {
        console.log("UPDATED WEEK");
        this.msg = "UPDATED!";
        setTimeout(() => {
          this.msg = null;
        }, 3000);
      });
  }

  close(e) {
    this.show = false;
  }

  getStuff(stuffType): void {
    switch(stuffType) {
    case 'shop': {
      this.Shop.getShops()
        .subscribe(res => {
          this.stuff = res;
          this.show = true;
        });
      return;
    }
    case 'staff': {
      this.Staff.getStaffs()
        .subscribe(res => {
          this.stuff = res;
          this.show = true;
        });
      return;
    }
    case 'slot': {
      this.Slot.getSlots()
        .subscribe(res => {
          this.stuff = res;
          this.show = true;
        });
    }}
  }

}
