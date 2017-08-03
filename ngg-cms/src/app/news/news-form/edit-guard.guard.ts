import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NewsFormComponent } from "app/news/news-form/news-form.component";
import { NewsService } from "app/news/news-service.service";

@Injectable()
export class EditGuard implements CanDeactivate<NewsFormComponent> {
  constructor(private newsService: NewsService) { }
  canDeactivate(component : NewsFormComponent): boolean {
    if(component.editMode){
      var navigate = window.confirm('Do you want to discard changes ?');
      if(navigate){
        sessionStorage.removeItem("editMode_KEY");
        this.newsService.setEditNews(null);
      }
      return navigate;
    }
    return true;
  }
}