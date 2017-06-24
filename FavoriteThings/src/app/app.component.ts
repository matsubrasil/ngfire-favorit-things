import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'MatsuBrasil Favorite Things';
  favoriteColor= 'tomato';
  favoriteNumber = 0;

  setColor(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log( 'TODO: update the color' );
  }

  // upNumber(){
  //   this.favoriteNumber++;
  // }

  // downNumber() {
  //   if (this.favoriteNumber > 0) {
  //     this.favoriteNumber--;
  //   }
  // }

  // resetNumber() {
  //   this.favoriteNumber = 0;
  // }

  setNumber( favoriteNumber: number ): void {
    // console.log(favoriteNumber);
    if (favoriteNumber >= 0) {
      this.favoriteNumber = favoriteNumber;
    }
  }
}
