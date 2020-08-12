import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allImages = [
    {type:'app', src:'assets/images/portfolio/app1.jpg'},
    {type:'web', src:'assets/images/portfolio/web2.jpg'},
    {type:'web', src:'assets/images/portfolio/web1.jpg'},
    {type:'web', src:'assets/images/portfolio/web3.jpg'},
    {type:'card', src:'assets/images/portfolio/card2.jpg'},
    {type:'card', src:'assets/images/portfolio/card3.jpg'},
    {type:'app', src:'assets/images/portfolio/app2.jpg'},
    {type:'app', src:'assets/images/portfolio/app3.jpg'},
    {type:'card', src:'assets/images/portfolio/card1.jpg'},
  ];

  filteredImages = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredImages = this.allImages
  }

  //filtering the gallary images category
  onFilter(type:string){
    if(type === "all"){
      return this.filteredImages = this.allImages;
    }else{
      return this.filteredImages = this.allImages.filter(image=>image.type === type)
    }
     

  }

}
