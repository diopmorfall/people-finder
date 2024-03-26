import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { nationalitiesInfos } from '../../utils/Nationalities';
import { InputParams } from '../../model/InputParams';

@Component({
    selector: 'app-options-search-form',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    templateUrl: './options-search-form.component.html',
    styleUrl: './options-search-form.component.css'
})
export class OptionsSearchFormComponent {

    @Output() parametersEvent = new EventEmitter<InputParams>()

    selectedGender: string = '';
    selectedNationalities: string[] = [];
    nationalities = new FormControl(''); //todo: study how it works
    nationalitiesList: string[] = nationalitiesInfos.map(nationality => nationality.name);

    selectedGenderChanged(e: MatRadioChange): void{
        this.selectedGender = e.value
        if(this.selectedGender === 'random') this.selectedGender = ''
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
        } else return '';

        return selectedNationalitiesCodes.toString()
    }

    sendParameters(): void {
        this.parametersEvent.emit({ 
            gender: this.selectedGender,
            nationalities: this.getNationalityCodes()
        })
    }
}
