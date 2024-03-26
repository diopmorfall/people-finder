import { Component, Inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../../model/User';

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
    @Input() selectedUser!: User
    
    constructor(@Inject(MAT_DIALOG_DATA) public user: User){ 
        this.selectedUser = user;
    }
}

