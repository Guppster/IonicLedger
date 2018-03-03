import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  testprint(){
      alert("works");
  }
  init() {
      window['cordova']['plugins']['ledger']['init'](
        (result) => {
        alert(result);
        alert("all good mane");
        },
        (error) => {
        alert("bad");
        }
    );
  }
}
