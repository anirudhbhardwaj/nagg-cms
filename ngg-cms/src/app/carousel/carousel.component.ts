import { Component, OnInit } from '@angular/core';
declare var $;

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
            {image:'/assets/static-images/love-us.jpg',text:'To know us is to love us'},
            {image:'/assets/static-images/disrupters-carousel-desk.jpg',text:'Are you losing out to disrupters?'},
            {image:'/assets/static-images/enterprise-agile-desk.jpg',text:'Enterprise Agile'}
        );
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $("#myCarousel").carousel();
      var mCarouselTO = setTimeout(function () {
        $('#myCarousel').carousel({
          interval: 2000,
          cycle: true,
        }).trigger('slide');
      }, 2000);
    });
  }

}
