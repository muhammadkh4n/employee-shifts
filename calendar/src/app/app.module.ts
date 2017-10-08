import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from 'angular-io-overlay';
import { DatePickerModule } from 'angular-io-datepicker';

// Services
import { ShopService } from './services/shop.service';
import { WeekService } from './services/week.service';
import { StaffService } from './services/staff.service';
import { SlotService } from './services/slot.service';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ExportComponent } from './components/export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    ActionsComponent,
    FormModalComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OverlayModule,
    DatePickerModule
  ],
  providers: [
    ShopService,
    WeekService,
    StaffService,
    SlotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
