import { Component, OnInit } from '@angular/core';
class archiveDate {
  monthyear: String
  startDate: String
  endDate: String
  constructor(monthyear, startDate, endDate) {
    this.monthyear = monthyear;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.css']
})

export class ArchivedNewsComponent implements OnInit {
  today = new Date;
  archiveDates = Array<archiveDate>(5);

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      let year = this.today.getFullYear();
      let month = this.today.getMonth() - i;
      let monthyear = new Date(year, month, 1);
      let startDate = new Date(year, month, 2).toISOString();
      let endDate = new Date(year, month+1, 1).toISOString();

      this.archiveDates[i] = new archiveDate(
        monthyear,
        startDate,
        endDate
      );
    }
  }
}
