import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

    testList: any;

    constructor() { }

    ngOnInit(): void {
    }
}
