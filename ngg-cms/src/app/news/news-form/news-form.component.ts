import { Constants } from './../../shared/constants';
import { Router } from '@angular/router';
import { NewsService } from './../news-service.service';
import { AuthService } from "../../auth.service";
import { News } from './../news.models';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news-form',
    templateUrl: 'news-form.component.html',
    styleUrls: ['news-form.component.css']
})
export class NewsFormComponent implements OnInit {
    imageRemoved: boolean = false;
    editMode = false;
    submitted = false;
    model: News = new News(Constants.DEFAULT_AUTHOR);
    editModel: News = null;
    image: File;
    base64textString: String = "";

    constructor(private newsService: NewsService, private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.model = this.newsService.getEditNews();
        // preserve the original edited news
        this.editModel = JSON.parse(JSON.stringify(this.model));
        this.editMode = (this.model !== null);
        if (sessionStorage.getItem("editMode_KEY") == 'true' && !this.editMode) {
            sessionStorage.removeItem("editMode_KEY");
            this.router.navigate(['/main/news/admin']);
        }
        sessionStorage.setItem("editMode_KEY", JSON.stringify(this.editMode));
        this.model = this.model || new News(Constants.DEFAULT_AUTHOR);
    }

    onSubmit() {
        if (!this.editMode) {
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
                    this.router.navigate(['/main/news/admin']);
                });

        } else {
            var imgB64Str: string = this.base64textString.toString();
            this.model.image = imgB64Str.length > 0 ? imgB64Str : this.editModel.image;
            this.newsService.setEditNews(null);
            this.newsService.saveEditNews(this.model).subscribe((res) => {
                this.newsService.getAllNews();
                this.editMode = false;
                sessionStorage.removeItem("editMode_KEY");
                this.newsService.updatePopularNewsViews();
                this.router.navigate(['main/news/newsDetail', this.model._id]);
            })
        }
    }

    newNews() {
        this.model = new News(Constants.DEFAULT_AUTHOR);
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
            if (this.image) {
                var reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsBinaryString(this.image);
            }
        }
    }
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    }

    cancel() {
        this.newsService.setEditNews(null);
        this.router.navigate(['/main/news/admin']);
    }

    removeImage() {
        this.editModel.image = "";
        this.imageRemoved = true;
    }
}