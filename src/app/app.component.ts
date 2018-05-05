import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public numOfSeats = [];

  constructor() {
  }
  public j = 0;

  public getSeatNo(seatNo) {
    const seatNum = seatNo.value;
    let selectedSeat;

    const k = parseInt(seatNum, 10) + this.j;

    for (let i = this.j; i < k; i++) {
      if (i <= 80) {
        selectedSeat = document.getElementById(i.toString());
        selectedSeat.className += ' seat-selected';
      } else {
        alert('No seats left');
      }
    }
    this.setLastSeat(k);
  }
  /**
   *
   * @param seatNum
   */
  public setLastSeat(seatNum) {
    this.j = parseInt(seatNum, 10);
  }

  ngOnInit() {
    this.numOfSeats.length = 80;
  }
}
