import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var ledgerPlugin: any;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    ledger: any;

    constructor(public navCtrl: NavController) {
    }

    init() {
        this.ledger = new ledgerPlugin();
        this.ledger.init(
            (result) => {
                console.log('Java code connected and result recieved')
                alert(result);
            },
            (error) => {
                alert(error);
                console.log('VERY BAD')
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
        window['cordova']['plugins']['ledger']['getWalletPublicKey'](
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
