import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './book.model';
@Injectable()
export class BookService {

    private resourceUrl: string =  'api/books';

    constructor(private http: Http) { }

    create(book: Book): Observable<Response> {
        let copy = Object.assign({}, book);
        return this.http.post(this.resourceUrl, copy);
    }

    update(book: Book): Observable<Response> {
        let copy = Object.assign({}, book);
        return this.http.put(this.resourceUrl, copy);
    }

    find(id: number): Observable<Book> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<Response> {
        let options: any = {};
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('filter', req.filter);

            options.search = params;
        }
        // TODO Use Response class from @angular/http when the body field will be accessible directly
        return this.http.get(this.resourceUrl, options).map((res: any) => {
            return res;
        });
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

}
