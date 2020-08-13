import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../_service/images.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allImages = [];

  filteredImages = [];

  constructor(private imageService:ImagesService) { }

  ngOnInit(): void {
    //get all portfolio images
    this.allImages = this.imageService.getPortfolioImages();
    this.filteredImages = this.allImages
  }

  //filtering the portfolio images to categories
  onFilter(type:string){
    if(type === "all"){
      return this.filteredImages = this.allImages;
    }else{
      return this.filteredImages = this.allImages.filter(image=>image.type === type)
    }
     

  }

}
