import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../model/User';

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
    @Input() selectedUser!: User
    @Output() closeDetailEvent = new EventEmitter()

    closeUserDetail(){
        this.closeDetailEvent.emit()
    }
}
