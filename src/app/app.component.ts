import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { RandomUserService } from './services/random-user.service';
import { InputParams } from './model/InputParams';
import { OptionsSearchFormComponent } from './options-search-form/options-search-form.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, OptionsSearchFormComponent, UserCardComponent],
    providers: [RandomUserService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(private randomUserService: RandomUserService) {}

    title = 'people-finder';
    users$!: Observable<any>;

    getParameters(params: InputParams){
        this.getUsers(params)
    }

    getUsers(params: InputParams){
        this.users$ = this.randomUserService.getUsers(params)
    }
}
