import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-paynow',
    templateUrl: './paynow.component.html',
    styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {

    fistStep: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    stepHandler() {
      this.fistStep = false
    }
}
