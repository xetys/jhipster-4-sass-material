import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Session } from './session.model';

@Injectable()
export class SessionsService {
    constructor(private http: Http) { }

    findAll(): Observable<Session[]> {
        return this.http.get('api/account/sessions/').map((res: Response) => res.json());
    }

    delete(series: string): Observable<Response> {
        return this.http.delete(`api/account/sessions/${series}`);
    }
}
