import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
 
  title = 'MatsuBrasil Favorite Things';
  favoriteColor= 'tomato';
  favoriteNumber = 0;

  constructor( db: AngularFireDatabase ) {

  }

  ngOnInit(): void {
    firebase.database().ref().child( 'color' ).on( 'value',
      ( snapshot: firebase.database.DataSnapshot ) => {
        // console.log(snapshot.val());
        this.favoriteColor = snapshot.val();
      } );

    firebase.database().ref().child('number').on('value',
      (snapshot: firebase.database.DataSnapshot) => {
        // console.log(snapshot.val());
        this.favoriteNumber = snapshot.val();
      });
  }

  ngOnDestroy(): void {
    firebase.database().ref().child( 'color' ).off();
    firebase.database().ref().child( 'number' ).off();
  }

  setColor(selectedColor: string): void {
    // this.favoriteColor = selectedColor;
    firebase.database().ref().child( 'color' ).set( selectedColor );
  }

  // updateColor(): void {
  //   console.log( 'TODO: update the color' );
  //   firebase.database().ref().child( 'color' ).once( 'value',
  //     ( snapshot: firebase.database.DataSnapshot ) => {
  //       // console.log(snapshot.val());
  //       this.favoriteColor = snapshot.val();
  //     } );
  // }

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
    // if (favoriteNumber >= 0) {
    //   this.favoriteNumber = favoriteNumber;
    // }
    if (favoriteNumber >= 0) {
      firebase.database().ref().child('number').set(favoriteNumber);
    }
  }
}
