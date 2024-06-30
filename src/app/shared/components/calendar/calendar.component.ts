import { Component } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'calendar-component',
  template: `
    <ejs-schedule
      [selectedDate]="selectedDate"
      [currentView]="currentView"
      height="500"
      width="1250">
    </ejs-schedule>
  `,
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  public selectedDate: Date = new Date();
  public currentView: View = 'Agenda';
}
