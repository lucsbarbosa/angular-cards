import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})

export class OverlayComponent implements OnInit {

  @Output() sendData = new EventEmitter<object>();

  user: user = {
    username: "",
    password: "",
    age: undefined,
    notifications: true,
    color: undefined,
    photo: undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any): void {
    const f = new FileReader();
    f.readAsDataURL(event.target.files[0])
    f.onload = event => {
      this.user.photo = event.target?.result;
      console.log(typeof this.user.photo)
    }
  }

  submit(): void {
    this.sendData.emit({
      changeOverlay: false,
      cardInfo: this.user
    })
  }
}
