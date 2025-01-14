import { Component } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {

  isOpenMenuProfile = false;

  toggleMenu(): void {
    this.isOpenMenuProfile = !this.isOpenMenuProfile;
  }

  closeMenu(): void {
    this.isOpenMenuProfile = false;
  }
}
