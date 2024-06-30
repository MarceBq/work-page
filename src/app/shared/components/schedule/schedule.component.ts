import { Component } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'schedule-component',
  template:
    '<ejs-schedule [selectedDate]="selectedDate" [currentView]="currentView" [eventSettings]="eventSettings" height="500" width="1250 "></ejs-schedule>',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  public selectedDate: Date = new Date();
  public currentView: View = 'Month';
  public eventSettings: { dataSource: any[] } = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Board Meeting',
        StartTime: new Date(2021, 7, 2, 9, 0),
        EndTime: new Date(2021, 7, 2, 11, 0),
        IsAllDay: true,
      },
      {
        Id: 2,
        Subject: 'Training session',
        StartTime: new Date(2021, 7, 2, 13, 0),
        EndTime: new Date(2021, 7, 2, 15, 0),
        IsAllDay: true,
      },
    ],
  };
}
