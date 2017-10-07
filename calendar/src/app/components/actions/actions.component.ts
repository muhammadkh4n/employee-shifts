import { Component, OnInit, Input } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { StaffService } from '../../services/staff.service'
import { SlotService } from '../../services/slot.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() week: any;
  
  show: boolean = false;
  modalType: string;
  stuff: any = [];
  
  constructor(private Shop: ShopService,
              private Staff: StaffService,
              private Slot: SlotService) { }

  ngOnInit() {
  }

  formModal(cat: string): void {
    this.getStuff(cat);
    this.modalType = cat;
  }

  getWeek() {
    console.log(this.week);
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
