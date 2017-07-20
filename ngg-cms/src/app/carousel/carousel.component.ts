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
            {image:'/assets/static-images/love-us.jpg',text:'nagarro values1'},
            {image:'/assets/static-images/disrupters-carousel-desk.jpg',text:'nagarro values2'},
            {image:'/assets/static-images/enterprise-agile-desk.jpg',text:'nagarro values3'}
        );
    }

  ngOnInit() {
  }

}
