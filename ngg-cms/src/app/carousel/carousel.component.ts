import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            // {image:'/assets/static-images/grand_canyon.jpg',text:'nag 1'},
            {image:'/assets/static-images/love-us.jpg',text:'nag 1'},
            {image:'/assets/static-images/disrupters-carousel-desk.jpg',text:'nag 2'},
            {image:'/assets/static-images/enterprise-agile-desk.jpg',text:'nag 3'}
        );
    }

  ngOnInit() {
  }

}
