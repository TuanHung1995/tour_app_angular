import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-booking.component.html',
  styleUrl: './find-booking.component.css'
})
export class FindBookingComponent {

  choosedEmail: boolean = false;
  choosedPhone: boolean = false;

  constructor() { }

  chooseEmail() {
    if (this.choosedPhone) {
      this.choosedPhone = !this.choosedPhone;
    }
    this.choosedEmail = !this.choosedEmail;
  }

  choosePhone() {
    if (this.choosedEmail) {
      this.choosedEmail = !this.choosedEmail;
    }
    this.choosedPhone = !this.choosedPhone;
  }

}
