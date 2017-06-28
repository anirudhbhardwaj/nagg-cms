import { NewsService } from './../news-service.service';
import { News } from './../news.models';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news-form',
    templateUrl: 'news-form.component.html',
    styleUrls: ['news-form.component.css']
})
export class NewsFormComponent implements OnInit {
    submitted = false;
    model: News;
    image: File;

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
        this.model = new News();
    }

    onSubmit() {
        this.submitted = true;
        let formData: FormData = new FormData();
        // TODO
        // let tags = this.model.tags.map((value: any) => {
        //     return value.value;
        // });
        // this.model.tags = tags;
        formData.append('image', this.image);
        formData.append('model', JSON.stringify(this.model));

        this.newsService.postNews(formData)
            .subscribe();
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
}