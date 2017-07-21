import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news/news.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archived-news-thumb',
  templateUrl: './archived-news-thumb.component.html',
  styleUrls: ['./archived-news-thumb.component.css']
})
export class ArchivedNewsThumbComponent implements OnInit {
  @Input() archiveDate: {
    monthyear: String,
    startDate: String,
    endDate: String
  };
  news: News[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToNewsSearch() {
    this.router.navigate(['/main/news/search'], { queryParams: { "startDate": this.archiveDate.startDate, "endDate": this.archiveDate.endDate } });

  }

}
