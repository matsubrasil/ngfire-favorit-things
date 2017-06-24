import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'MatsuBrasil Favorite Things';
  favoriteColor= 'tomato';

  setColor(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log( 'TODO: update the color' );
  }
}
