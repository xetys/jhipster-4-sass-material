
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';
import { Ng2Webstorage } from 'ng2-webstorage';

import { BookstoreSharedModule } from './shared';
import { BookstoreAdminModule } from './admin/admin.module';
import { BookstoreEntityModule } from './entities/entity.module';
import { BookstoreAccountModule } from './account/account.module';

import { appState } from './app.state';
import { HomeComponent, homeState } from './home';
import { JhiRouterConfig } from './blocks/config/router.config';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    errorState,
    accessdeniedState
} from './layouts';

let routerConfig = {
    configClass: JhiRouterConfig,
    useHash: true,
    states: [
        appState,
        homeState,
        errorState,
        accessdeniedState
    ]
};

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        UIRouterModule.forRoot(routerConfig),
        Ng2Webstorage.forRoot({ prefix: 'jhi'}),
        BookstoreSharedModule,
        BookstoreAdminModule,
        BookstoreEntityModule,
        BookstoreAccountModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BookstoreAppModule {}
