import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {MdDialog} from '@angular/material';

import { JhiLoginModalComponent } from './login.component';

@Injectable()
export class LoginModalService {
    private isOpen = false;
    constructor (
        private dialog: MdDialog,
    ) {}

    open (): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        this.dialog.open(JhiLoginModalComponent)
            .afterClosed()
            .subscribe(result => {
                console.log(`Closed with: ${result}`);
                this.isOpen = false;
            });
/*        let modalRef = this.modalService.open(JhiLoginModalComponent);
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;*/
    }
}
