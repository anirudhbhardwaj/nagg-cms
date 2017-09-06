import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { News } from './../news/news.models';
import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  headingText: string = "";
  searchData: News[];

  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // This is required as angular doesn't refresh the route in case just the query params change
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.tag) {
        this.headingText = 'Search Results for : ' + queryParams.tag;
        this.searchService.getSearchNews(queryParams.tag)
          .subscribe(
          data => this.searchData = data
          )
      } else if (queryParams.startDate && queryParams.endDate) {
        this.searchService.getArchivedNews(queryParams.startDate, queryParams.endDate).subscribe(news => {
          let date = new Date(queryParams.startDate)
          this.headingText = 'Archived news for the month of ' + date.toLocaleString("en-us" , { month: "long" });;
          this.searchData = news;
        });
      }
    });
    // this.route.data
    //   .subscribe((data) => {
    //     this.searchData = data.searchData;
    //   });
  }

  redirectToNewsDetail(news: News) {
    this.router.navigate(['main/news/newsDetail', news._id]);
  }
}
