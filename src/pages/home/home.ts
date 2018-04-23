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
        alert("UI Testing!!~~");
    }

    init() {
        window['cordova']['plugins']['ledger']['init'](
            (result) => {
                console.log('Java code connected and result recieved')
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }
}
