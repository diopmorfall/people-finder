import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { InputParams } from '../model/InputParams';
import { Results } from '../model/Results';

@Injectable({
    providedIn: 'root'
})
export class RandomUserService {

    constructor(private httpClient: HttpClient) { }

    getUsers(params: InputParams): Observable<Results | any> {
        let url = `https://randomuser.me/api/`
        let searchParams = new HttpParams();
        searchParams = searchParams.append('results', '50');
        if(params.gender != '') searchParams = searchParams.append('gender', params.gender);
        if(params.nationalities != '') searchParams = searchParams.append('nat', params.nationalities);

        return this.httpClient.get<Results | any>(url, {
            params: searchParams
        }).pipe(
            catchError(error => {
                console.log('Error in fetching data', error)
                return of({ results: [] })
            })
        )
    }
}
