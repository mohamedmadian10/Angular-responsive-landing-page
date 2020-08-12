import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../_service/images.service';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {
  clientImages =[];

  constructor(private imageService:ImagesService) { }

  ngOnInit(): void {
    this.clientImages = this.imageService.getClientImages();
  }

  

}
