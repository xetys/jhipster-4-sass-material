import { JhiLanguageService } from 'ng-jhipster';
import { JhiConfigurationComponent } from './configuration.component';

export const configState = {
    name: 'jhi-configuration',
    parent: 'admin',
    url: '/configuration',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'configuration.title'
    },
    views: {
        'content@': { component: JhiConfigurationComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [JhiLanguageService],
        resolveFn: (languageService) => languageService.setLocations(['configuration'])
    }]
};
