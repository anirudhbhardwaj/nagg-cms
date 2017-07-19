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
            {image:'/assets/static-images/Branch.png',text:'nag 1'},
            {image:'/assets/static-images/grass.png',text:'nag 2'},
            {image:'/assets/static-images/water.png',text:'nag 3'},
            {image:'/assets/static-images/carousel.png',text:'nag 4'}
        );
    }

  ngOnInit() {
  }

}
