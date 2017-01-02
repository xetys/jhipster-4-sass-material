import { Transition } from 'ui-router-ng2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService, PaginationUtil } from 'ng-jhipster';

import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookDialogComponent } from './book-dialog.component';
import { BookDeleteDialogComponent } from './book-delete-dialog.component';
import { Book } from './book.model';
import { BookService } from './book.service';

export const bookState = {
    name: 'book',
    parent: 'entity',
    url: '/book',
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'bookstoreApp.book.home.title'
    },
    views: {
        'content@': { component: BookComponent }
    },
    resolve: [
        {
            token: 'translate',
            deps: [JhiLanguageService],
            resolveFn: (languageService) => languageService.setLocations(['book'])
        }
    ]
};

export const bookDetailState = {
    name: 'book-detail',
    parent: 'entity',
    url: '/book/:id',
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'bookstoreApp.book.detail.title'
    },
    views: {
        'content@': { component: BookDetailComponent }
    },
    resolve: [
        {
            token: 'translate',
            deps: [JhiLanguageService],
            resolveFn: (languageService) => languageService.setLocations(['book'])
        },
        {
            token: 'previousState',
            deps: [Transition],
            resolveFn: (trans: Transition) => {
                // TODO this needs to be tested
                const stateParams = trans.params();
                const stateService = trans.router.stateService;
                const currentStateData = {
                    name: stateService.current.name || 'book',
                    params: stateParams,
                    url: stateService.href(stateService.current.name, stateParams)
                };
                return currentStateData;
            }
        }
    ]
};

export const bookNewState = {
    name: 'book.new',
    url: '/new',
    data: {
        authorities: ['ROLE_USER']
    },
    onEnter: (trans: Transition) => {
        let $state = trans.router.stateService;
        let modalService = trans.injector().get(NgbModal);
        const modalRef  = modalService.open(BookDialogComponent, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.book = new Book();
        modalRef.result.then((result) => {
            console.log(`Closed with: ${result}`);
            $state.go('book', null, { reload: 'book' });
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            $state.go('book');
        });
    }
};

export const bookEditState = {
    name: 'book.edit',
    url: '/{id}/edit',
    data: {
        authorities: ['ROLE_USER']
    },
    onEnter: (trans: Transition) => {
        let $state = trans.router.stateService;
        let modalService = trans.injector().get(NgbModal);
        let bookService: BookService = trans.injector().get(BookService);
        let id = trans.params()['id'];
        bookService.find(id).subscribe(book => {
            // TODO Find a better way to format dates so that it works with NgbDatePicker
            const modalRef  = modalService.open(BookDialogComponent, { size: 'lg', backdrop: 'static'});
            modalRef.componentInstance.book = book;
            modalRef.result.then((result) => {
                console.log(`Closed with: ${result}`);
                $state.go('book', null, { reload: 'book' });
            }, (reason) => {
                console.log(`Dismissed ${reason}`);
                $state.go('^');
            });
        });
    }
};

export const bookDeleteState = {
    name: 'book.delete',
    url: '/{id}/delete',
    data: {
        authorities: ['ROLE_USER']
    },
    onEnter: (trans: Transition) => {
        let $state = trans.router.stateService;
        let modalService = trans.injector().get(NgbModal);
        let bookService: BookService = trans.injector().get(BookService);
        let id = trans.params()['id'];
        bookService.find(id).subscribe(book => {
            const modalRef  = modalService.open(BookDeleteDialogComponent, { size: 'md'});
            modalRef.componentInstance.book = book;
            modalRef.result.then((result) => {
                console.log(`Closed with: ${result}`);
                $state.go('book', null, { reload: 'book' });
            }, (reason) => {
                console.log(`Dismissed ${reason}`);
                $state.go('^');
            });
        });
    }
};
