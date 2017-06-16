import { News } from './news.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from './../shared/httpClient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HTTPIntercepterService} from "../shared/HTTPIntercepterService";
import {Response} from '@angular/http';


@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient, private httpWrapper: HTTPIntercepterService) { }

  private url = 'http://localhost:3000/api/news';

  private obj = {
    fingerprint: {
      userID: 'A811242',
    },
    title: 'Nagarro News Sample 2',
    description: `British Prime Minister.`,
    imageUrl: null,
    author_name: 'Anirudh Bhardwaj',
    tags: ['Britain', 'Brexit'],
    reactions: [{ userId: 'Xyz', like: true, comment: 'Hello World' }, { userId: 'Abc', like: true, comment: 'Hello World 2' }]
  };

  public postNews(): Observable<any>  {
    return this.httpWrapper.post('http://localhost:3000/api/news', JSON.stringify(this.obj))
      .map((res) => {
        return res.json() || {};
      });
  }

  public getAllNews(): Observable<Response> {
    return this.httpWrapper.get('http://localhost:3000/api/news').map((res)=> {
      return res.json() || {};
    });
  }

}
