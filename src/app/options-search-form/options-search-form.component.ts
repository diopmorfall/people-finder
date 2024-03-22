import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-options-search-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  templateUrl: './options-search-form.component.html',
  styleUrl: './options-search-form.component.css'
})
export class OptionsSearchFormComponent {
    selectedGender: string = '';

}
