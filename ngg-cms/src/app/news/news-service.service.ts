import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from './../shared/httpClient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:3000/api/news";

  private obj = {
    fingerprint: {
      userID: 'A811242',
    },
    title: 'Nagarro News Sample',
    description: `British Prime Minister.`,
    imageUrl: null,
    author_name: "Anirudh Bhardwaj",
    tags: ['Britain', 'Brexit'],
    reactions: [{ userId: 'Xyz', like: true, comment: 'Hello World' }, { userId: 'Abc', like: true, comment: 'Hello World 2' }]
  };

  public postNews() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(this.url, JSON.stringify(this.obj))
      .map(res => res.json());
  }
}
