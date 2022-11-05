import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  listOfBaris = [];
  jumlahBaris = 0;

  inputForm() {
    this.listOfBaris = [];
    for (let i = 0; i < this.jumlahBaris; i++) {
      this.listOfBaris.push(i + 1);
    }
  }
}
