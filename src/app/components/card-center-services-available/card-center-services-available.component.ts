import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-center-services-available',
  templateUrl: './card-center-services-available.component.html',
  styleUrls: ['./card-center-services-available.component.css'],
})

export class CardCenterServicesAvailableComponent {
  constructor(private router: Router) {}

  navigateToPage() {
    this.router.navigate(['otherServices/myCadrs']);
  }
}
