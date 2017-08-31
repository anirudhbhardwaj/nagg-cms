import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service'

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

class dateRange {
  datefrom
}

@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.css']
})

export class ArchivedNewsComponent implements OnInit {
  archiveDates: archiveDate[] = new Array();
  dateRange: dateRange
  today = new Date;
  months;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getdates()
  }

  getdates() {
    this.searchService.getNewsDates().subscribe(newsdate => {
      this.dateRange = newsdate[0]
      var date = new Date(this.dateRange.datefrom)
      this.months = this.monthDiff(date, this.today)
      // //
      for (let i = 0; i < this.months; i++) {
        let year = this.today.getFullYear();
        let month = this.today.getMonth() - i;
        let monthyear = new Date(year, month, 1);
        let startDate = new Date(year, month, 2).toISOString();        
        let endDate = new Date(year, month + 1, 1).toISOString();

        this.archiveDates.push(new archiveDate(
          monthyear,
          startDate,
          endDate
        ));
      }
    });
  }

  monthDiff(d1: Date, d2: Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth()+1;
    return months <= 0 ? 0 : months;
  }

}
