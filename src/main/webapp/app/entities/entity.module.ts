import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UIRouterModule } from 'ui-router-ng2';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { BookstoreSharedModule } from '../shared';
import {
    entityState,
    BookService,
    BookComponent,
    BookDetailComponent,
    BookDialogComponent,
    BookDeleteDialogComponent,
    bookState,
    bookDetailState,
    bookNewState,
    bookEditState,
    bookDeleteState,
    /* jhipster-needle-add-entity-to-module-import - JHipster will add entity classes here */
} from './';

let ENTITY_STATES = [
    entityState,
    bookState,
    bookNewState,
    bookDetailState,
    bookEditState,
    bookDeleteState,
    /* jhipster-needle-add-entity-to-module-states - JHipster will add entity state vars here */
];

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BookstoreSharedModule,
        InfiniteScrollModule,
        UIRouterModule.forChild({ states: ENTITY_STATES })
    ],
    declarations: [
        BookComponent,
        BookDetailComponent,
        BookDialogComponent,
        BookDeleteDialogComponent,
        /* jhipster-needle-add-entity-to-module-declarations - JHipster will add entity component classes here */
    ],
    entryComponents: [
        BookDialogComponent,
        BookDeleteDialogComponent,
        /* jhipster-needle-add-entity-to-module-entryComponents - JHipster will add entity dialog classes here */
    ],
    providers: [
        BookService,
        /* jhipster-needle-add-entity-to-module-providers - JHipster will add entity Service classes here */
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookstoreEntityModule {}

