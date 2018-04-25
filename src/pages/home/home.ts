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
                console.log('Java code connected and result recieved')
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }

    setupWallet() {
        window['cordova']['plugins']['ledger']['setupWallet'](
            (result) => {
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }

    getWalletPublicAddress() {
        window['cordova']['plugins']['ledger']['getWalletPublicAddress'](
            (result) => {
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }

    verifyPin() {
        window['cordova']['plugins']['ledger']['verifyPin'](
            (result) => {
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }

    getPinRemainingAttempts() {
        window['cordova']['plugins']['ledger']['getPinRemainingAttempts'](
            (result) => {
                alert(result);
            },
            (error) => {
                alert(error);
            }
        );
    }
}
