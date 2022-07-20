import { Component } from '@angular/core';

declare global {
  interface user {
    username: string;
    password: string;
    age: number | undefined;
    notifications: boolean;
    color: string | undefined;
    photo: string | ArrayBuffer | null | undefined;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  showOverlay: boolean = false;
  users: user[] = [];

  changeOverlay(event: any): void {
    this.showOverlay = event;
  }

  handleData(event: any): void {
    this.showOverlay = event.changeOverlay;
    this.users.push(event.cardInfo);
  }
}
