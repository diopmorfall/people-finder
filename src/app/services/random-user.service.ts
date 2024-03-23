import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { InputParams } from '../model/InputParams';
import { Results } from '../model/Results';

@Injectable({
    providedIn: 'root'
})
export class RandomUserService {

    constructor(private httpClient: HttpClient) { }

    getUsers(params: InputParams): Observable<Results> {
        let url = `https://randomuser.me/api/`
        let searchParams = new HttpParams();
        searchParams = searchParams.append('results', '10');
        if(params.gender != '') searchParams = searchParams.append('gender', params.gender);
        if(params.nationalities != '') searchParams = searchParams.append('nat', params.nationalities);

        return this.httpClient.get<Results>(url, {
            params: searchParams
        })
    }

    handleError(){

    }
}
