import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [CardComponent, ScheduleComponent, CalendarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
  exports: [CardComponent, ScheduleComponent, CalendarComponent],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
  ],
})
export class SharedModule {}
