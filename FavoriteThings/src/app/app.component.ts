import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'MatsuBrasil Favorite Things';
  favoriteColor= 'tomato';
  favoriteNumber = 0;

  constructor( db: AngularFireDatabase ) {

  }

  setColor(selectedColor: string): void {
    // this.favoriteColor = selectedColor;
    firebase.database().ref().child( 'color' ).set( selectedColor );
  }

  updateColor(): void {
    console.log( 'TODO: update the color' );
    firebase.database().ref().child( 'color' ).once( 'value',
      ( snapshot: firebase.database.DataSnapshot ) => {
        // console.log(snapshot.val());
        this.favoriteColor = snapshot.val();
      } );
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
