import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private teamImages = [
    {member:'1', src:'assets/images/team-1.jpg'},
    {member:'2', src:'assets/images/team-2.jpg'},
    {member:'3', src:'assets/images/team-3.jpg'},
    {member:'4', src:'assets/images/team-4.jpg'},
  ];

  private clientImages =[
    {member:'1', src:'assets/images/clients/client-1.png'},
    {member:'2', src:'assets/images/clients/client-2.png'},
    {member:'3', src:'assets/images/clients/client-3.png'},
    {member:'4', src:'assets/images/clients/client-4.png'},
    {member:'5', src:'assets/images/clients/client-5.png'},
    {member:'6', src:'assets/images/clients/client-6.png'},
    {member:'7', src:'assets/images/clients/client-7.png'},
    {member:'8', src:'assets/images/clients/client-8.png'}
  ]

  constructor() { }

  getTeamImages(){
    return this.teamImages.slice(0);
  }

  getClientImages(){
    return this.clientImages.slice(0);
  }
}
