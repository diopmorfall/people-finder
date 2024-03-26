import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { User } from '../../model/User';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatDialogModule, UserDetailsComponent],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit{
    constructor(public dialog: MatDialog){ }
    
    @Input() userData!: User;
    
    ngOnInit(): void {
        //console.log(this.userData)
    }

    openUserDetails(): void{
        this.dialog.open(UserDetailsComponent, {
            data: this.userData
        })
    }
}
