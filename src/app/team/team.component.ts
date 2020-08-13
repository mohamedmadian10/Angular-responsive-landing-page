import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../_service/images.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamImages: any[] = [];

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.teamImages = this.imageService.getTeamImages();
  }
}
