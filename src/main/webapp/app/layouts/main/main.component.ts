import { Component } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('../../../scss/vendor.scss'),
        require('../../../scss/main.scss')
    ]
})
export class JhiMainComponent {}
