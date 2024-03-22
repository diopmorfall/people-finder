import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OptionsSearchFormComponent } from './options-search-form/options-search-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, OptionsSearchFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'people-finder';
}
