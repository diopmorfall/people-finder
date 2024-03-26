import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

import { RandomUserService } from './services/random-user.service';
import { InputParams } from './model/InputParams';
import { OptionsSearchFormComponent } from './components/options-search-form/options-search-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { Results } from './model/Results';
import { User } from './model/User';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        MatPaginatorModule,
        OptionsSearchFormComponent,
        UserCardComponent
    ],
    providers: [RandomUserService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(
        private randomUserService: RandomUserService,
        private breakpointObserver: BreakpointObserver
    ) {}
    
    
    title = 'people-finder';
    users$!: Observable<Results>;
    selectedUser!: User;
    pageEvent: PageEvent = new PageEvent;
    @Input() length: number = 50;
    @Input() pageSize = 5;
    pageIndex = 0;
    showFirstLastButtons: boolean = true;
    showPageSizeOptions: boolean = false;
    hidePageSize: boolean = true;
    breakpointsSubscription!: Subscription;

    ngOnInit(): void {
        this.breakpointsSubscription = this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium
        ])
        .subscribe(result => {
            if(result.breakpoints[Breakpoints.XSmall]){
                this.pageSize = 5
            }

            if(result.breakpoints[Breakpoints.Small]){//todo: after styling the cards, choose the number of items per page
                this.pageSize = 5
            }

            if(result.breakpoints[Breakpoints.Medium]){
                this.pageSize = 5
            }
        })
    }

    ngOnDestroy(): void {
        this.breakpointsSubscription.unsubscribe()
    }

    getParameters(params: InputParams){
        this.getUsers(params)
    }

    getUsers(params: InputParams){
        this.users$ = this.randomUserService.getUsers(params)
    }

    onPageEvent(e: PageEvent) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
}
