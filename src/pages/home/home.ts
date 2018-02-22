import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  init() {
  window['cordova']['plugins']['ledger']['init'](
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
