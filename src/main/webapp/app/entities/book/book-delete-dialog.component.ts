import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';

import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
    selector: 'jhi-book-delete-dialog',
    templateUrl: './book-delete-dialog.component.html'
})
export class BookDeleteDialogComponent {

    book: Book;

    constructor(
        private bookService: BookService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {}

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id) {
        this.bookService.delete(id).subscribe(response => {
            this.eventManager.broadcast({ name: 'bookListModification', content: 'Deleted an book'});
            this.activeModal.dismiss(true);
        });
    }
}
