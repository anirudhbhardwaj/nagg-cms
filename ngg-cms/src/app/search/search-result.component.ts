import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchData: Array<string> = null;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchData = this.searchService.getFoundData();
  }

}
