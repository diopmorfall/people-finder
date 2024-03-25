import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { User } from '../../model/User';

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit{
    
    @Input() userData!: User;
    @Output() selectedUserEvent = new EventEmitter<User>()
    
    ngOnInit(): void {
        //console.log(this.userData)
    }

    sendUserDetails(): void{
        this.selectedUserEvent.emit(this.userData)
    }
}
