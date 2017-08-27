import { Constants } from './../shared/constants';
import { News } from './news.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from './../shared/httpClient.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsService {
  private updatePopularNews = new BehaviorSubject<Boolean>(false);
  public updatePopularNews$ = this.updatePopularNews.asObservable();

  private editModeSource = new BehaviorSubject<boolean>(false);
  public editSource$ = this.editModeSource.asObservable();
  constructor(private httpClient: HttpClient) { }

  private news: News[] = [];
  private editedNews: News = null;

  setEditNews(news) {
    this.editedNews = news;
    let editMode = news !== null;
    this.editModeSource.next(editMode);
  }
  getEditNews() {
    return this.editedNews;
  }

  saveEditNews(editNews) {
    console.log("editnews : ", editNews);
    return this.httpClient.put(Constants.SERVER_URL_PREFIX + "api/news", editNews).map(res => res.json())
  }

  public postNews(news: any) {
    return this.httpClient.post(Constants.SERVER_URL_PREFIX + "api/news", news)
      .map(res => res.json());
  }

  public getAllNews(): Observable<News[]> {
    return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news")
      .map(res => {
        let body = res.json();
        this.news = body || {};
        return body || {};
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getImage(fileName: string) {
    return this.httpClient.get(Constants.SERVER_URL_PREFIX + "uploads/" + fileName)
      .map(res => {
        return res || {};
      });
  }

  // Simulate GET /news/:id
  // public getNewsById(id: string): News {
  //   let selectedNews = new News();
  //   let retreivedNews = this.news.filter((news) => {
  //     return news._id === id;
  //   });
  //   if (retreivedNews && retreivedNews.length > 0) {
  //     selectedNews = retreivedNews[0];
  //   }
  //   return selectedNews;
  // }

  public getNewsById(id)  {
    return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/newsDetail", { id:id })
      .map(res => {
        let body = res.json();
        this.news = body || {};
        return body || {};
      });
  }

  public getNewsbydate(dateFrom, dateTo): Observable<News[]> {
    return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/archive", { datefrom: dateFrom, dateto: dateTo })
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }

  public getPopularNews(): Observable<News[]> {
    return this.httpClient.get(Constants.SERVER_URL_PREFIX + "api/news/popular")
      .map(res => {
        let body = res.json();
        return body || {};
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updatePopularNewsViews(){
    this.updatePopularNews.next(true);
  }



}
