import { NgModule } from '@angular/core';

import {
    BookstoreSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    alertServiceProvider,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        BookstoreSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        alertServiceProvider()
    ],
    exports: [
        BookstoreSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class BookstoreSharedCommonModule {}
