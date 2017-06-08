import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from './../shared/httpClient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getAllNews(): void {
    this.httpClient.get("http://localhost:3000/api/news")
      .map(this.extractData)
      .subscribe((news) => {
        this.news = news;
      })
  }

  extractData(res: any) {
    let body = res.json();
    return body || {};
  }
}
