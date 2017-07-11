import { Router } from '@angular/router';
import { NewsService } from './../news-service.service';
import { News } from './../news.models';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news-form',
    templateUrl: 'news-form.component.html',
    styleUrls: ['news-form.component.css']
})
export class NewsFormComponent implements OnInit {
    editMode = false;
    submitted = false;
    model: News = new News();
    editModel: News = null;
    image: File;

    constructor(private newsService: NewsService, private router: Router) {
    }

    ngOnInit() {
        this.model = this.newsService.getEditNews();
        // preserve the original edited news
        this.editModel = JSON.parse(JSON.stringify(this.model));
        this.editMode = (this.model !== null);
        this.model = this.model || new News();
    }

    onSubmit() {
        // this.submitted = true;
        let formData: FormData = new FormData();
        formData.append('image', this.image);
        formData.append('model', JSON.stringify(this.model));
        this.newsService.postNews(formData)
            .subscribe(
            (data) => {
                if (this.editMode) {
                    this.newsService.setEditNews(null);
                }
                this.router.navigate(['/main/news']);
            });
    }

    newNews() {
        this.model = new News();
    }

    showFormControls(form: any) {
        return form && form.controls['title'] &&
            form.controls['title'].value;
    }

    imageUpload(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            this.image = file;
        }
    }

    cancel() {
        this.newsService.setEditNews(null);
        this.router.navigate(['/main/news']);
    }
}