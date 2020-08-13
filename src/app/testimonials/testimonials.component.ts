import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../_service/testimonials.service';
import { Testimonial } from '../_models/testimonial.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testemonials: Testimonial[] = [];

  constructor(private testimonService: TestimonialsService) {}

  ngOnInit(): void {
    //getTestimonials from service
    this.testimonService.getTestimonials().subscribe((testimons) => {
      this.testemonials = testimons['data'];
      // console.log(this.testemonials);
    });
  }

  // owl-caousal options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
    // nav: true
  };
}
