import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../_service/testimonials.service';
import { Testimonial } from '../_models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testemonials:Testimonial[] = [];

  constructor(private testimonService:TestimonialsService) { }

  ngOnInit(): void {
    this.testimonService.getTestimonials().subscribe(testimons=>{
      this.testemonials = testimons['data'];
      console.log(this.testemonials);
    })
  }

}
