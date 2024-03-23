import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

import { RandomUserService } from './services/random-user.service';
import { InputParams } from './model/InputParams';
import { OptionsSearchFormComponent } from './options-search-form/options-search-form.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, OptionsSearchFormComponent, UserCardComponent, MatPaginatorModule],
    providers: [RandomUserService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(private randomUserService: RandomUserService) {}

    title = 'people-finder';
    users$!: Observable<any>;
    pageEvent: PageEvent = new PageEvent;
    @Input() length: number = 50;
    @Input() pageSize = 5;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25];
    showFirstLastButtons: boolean = true;
    showPageSizeOptions: boolean = false;
    hidePageSize: boolean = true;

    getParameters(params: InputParams){
        this.getUsers(params)
    }

    getUsers(params: InputParams){
        this.users$ = this.randomUserService.getUsers(params)
    }

    handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
    
    setPageSizeOptions(setPageSizeOptionsInput: string) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
}
