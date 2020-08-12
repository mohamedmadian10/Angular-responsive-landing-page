import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //toggling nav bar without neading jquery or any js library to make the code cleaner
  isOpen:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  togglerNavBar(){
    this.isOpen = !this.isOpen;

  }

}
