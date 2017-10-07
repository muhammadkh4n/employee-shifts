import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

import { ShopService } from '../../services/shop.service';
import { StaffService } from '../../services/staff.service'
import { SlotService } from '../../services/slot.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  @Input() show: boolean;
  @Input() modalType: string;
  @Input() list: any = [];
  
  @Output() onClose = new EventEmitter<boolean>();

  msg: string;
  stuff: any = {};
  
  constructor(private Shop: ShopService,
              private Staff: StaffService,
              private Slot: SlotService) { }

  ngOnInit() {
  }

  close(): void {
    this.onClose.emit(false);
  }

  addStuff(stuffType): void {
    switch(stuffType) {
    case 'shop': {
      this.Shop.addShop(this.stuff)
        .subscribe(res => this.resHandler(res));
      return;
    }
    case 'staff': {
      this.Staff.addStaff(this.stuff)
        .subscribe(res => this.resHandler(res));
      return;
    }
    case 'slot': {
      this.Slot.addSlot(this.stuff)
        .subscribe(res => this.resHandler(res));
    }}
  }

  deleteThing(stuffType, id): void {
    switch(stuffType) {
    case 'shop': {
      this.Shop.deleteShop(id)
        .subscribe(res => {
          this.list = res;
        });
      return;
    }
    case 'staff': {
      this.Staff.deleteStaff(id)
        .subscribe(res => {
          this.list = res;
        });
      return;
    }
    case 'slot': {
      this.Slot.deleteSlot(id)
        .subscribe(res => {
          this.list = res;
        });
    }}
  }

  private resHandler(response): void {
    console.log("STUFF ADDED", response);
    this.list.push(response);
    this.msg = this.modalType + " added";
    setTimeout(() => {
      this.msg = null;
    }, 3000);
  }

}
