import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { InputParams } from '../model/InputParams';

@Injectable({
    providedIn: 'root'
})
export class RandomUserService {

    constructor(private httpClient: HttpClient) { }

    getUsers(params: InputParams): Observable<any> {
        let url = `https://randomuser.me/api/`
        let searchParams = new HttpParams();
        searchParams = searchParams.append('results', '5');
        if(params.gender != '') searchParams = searchParams.append('gender', params.gender);
        if(params.nationalities != '') searchParams = searchParams.append('nat', params.nationalities);

        return this.httpClient.get<any>(url, {
            params: searchParams
        })
    }
}
