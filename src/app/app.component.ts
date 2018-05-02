import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public numOfSeats = [];

  constructor(public renderer: Renderer2) {
  }

  public getSeatNo(seatNo) {
    const seatNum = seatNo.value;

    let selectedSeat;

    for (let i = 0; i < seatNum; i++) {

      selectedSeat = document.getElementById(i.toString());
      console.log(selectedSeat);
      selectedSeat.className += ' seat-selected';
    }
    console.log(seatNum);

  }








  ngOnInit() {
    this.numOfSeats.length = 80;
  }
}
