import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { nationalitiesInfos } from '../utils/Nationalities';

@Component({
    selector: 'app-options-search-form',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    templateUrl: './options-search-form.component.html',
    styleUrl: './options-search-form.component.css'
})
export class OptionsSearchFormComponent {
    constructor(){}

    @Output() parametersEvent = new EventEmitter<{ gender: string, nationalities: string}>()

    selectedGender: string = '';
    selectedNationalities: string[] = [];
    nationalities = new FormControl(''); //todo: study how it works
    nationalitiesList: string[] = nationalitiesInfos.map(nationality => nationality.name);

    selectedGenderChanged(e: MatRadioChange): void{
        this.selectedGender = e.value
    }

    selectedNationalitiesChanged(e: any): void{ //? see if you can use SelectionChange type
        this.selectedNationalities = e.value;
    }
    
    getNationalityCodes(): string{
        let selectedNationalitiesCodes: string[] = [];
        if(this.selectedNationalities.length > 0){
            this.selectedNationalities.map(nationality => {
                nationalitiesInfos.map(nationalityInfo => {
                if(nationality === nationalityInfo.name){
                    selectedNationalitiesCodes.push(nationalityInfo.code)
                }
                })
            })
        }
        return selectedNationalitiesCodes.toString()
    }

    sendParameters(): void {
        this.parametersEvent.emit({ 
            gender: this.selectedGender ? this.selectedGender : '',
            nationalities: this.getNationalityCodes() ? this.getNationalityCodes() : ''
        })
    }
}
