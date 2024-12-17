import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
    selector: 'app-post-form',
    templateUrl: './common-card.component.html',
    imports: [CardModule,
        DividerModule,
        DropdownModule,
        ChipsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextareaModule,
        InputSwitchModule,
        ButtonModule,
        InputIconModule,
        BadgeModule,
        CalendarModule,
        IconFieldModule,
        NgxMaterialTimepickerModule,
        FileUploadModule],
    standalone: true,
})
export class PostFormComponent {
    @Input() postForm!: FormGroup;
    @Input() mediaType: any[] = [];
    @Input() timeZones: any[] = [];

    selectedTime: string = '';
    keyboardEnabled: boolean = false;

    // Enable keyboard input when the user focuses on the input field
    enableKeyboard(): void {
        this.keyboardEnabled = true;
    }

    // Disable keyboard input when the timepicker opens for clock selection
    disableKeyboard(): void {
        this.keyboardEnabled = false;
    }

    // Update selected time when the time is set from the clock
    onTimeSelected(time: string): void {
        this.selectedTime = time;
    }
    value: boolean = true;
    @Output() fileSelected = new EventEmitter<any>();
    @Output() upload = new EventEmitter<any>();
    showValidationMessage: boolean = false;
    isValidHashtag = true;

    constructor() {

    }

    horSelected() {
        console.log('caled')
    }

    onFileSelect(event: any) {
        this.fileSelected.emit(event);
    }

    onUpload(event: any) {
        this.upload.emit(event);
    }

    onClear() {
        // Logic for clearing the file upload
    }

    validateHashtags(event: any) {
        // Add hashtag validation logic here
    }

    onRemove() {
        // Logic for removing hashtags
    }
}
