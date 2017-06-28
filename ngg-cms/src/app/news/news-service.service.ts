import { News } from './news.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from './../shared/httpClient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:3000/api/news";

  private obj = {
    fingerprint: {
      userID: 'A811242',
    },
    title: 'Nagarro News Sample 2',
    description: `British Prime Minister.`,
    imageUrl: null,
    author_name: "Anirudh Bhardwaj",
    tags: ['Britain', 'Brexit'],
    reactions: [{ userId: 'Xyz', like: true, comment: 'Hello World' }, { userId: 'Abc', like: true, comment: 'Hello World 2' }]
  };

  public postNews(news: any) {
    return this.httpClient.post("http://localhost:3000/api/news", news)
      .map(res => res.json());
  }

  public getAllNews(): Observable<News[]> {
    return this.httpClient.get("http://localhost:3000/api/news")
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }

  public getImage(fileName: string) {
    return this.httpClient.get("http://localhost:3000/uploads/" + fileName)
      .map(res => {
        return res || {};
      });
  }
}
