import { CommonModule, DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';

@Component({
    selector: 'hashtag-chip',
    templateUrl: './hashtag.component.html',
    standalone: true,
    imports: [ChipModule, CommonModule, FormsModule, ReactiveFormsModule, ChipsModule],
    styleUrls: ['./hashtag.component.scss']
})

export class HashTagChipComponent {

    public inputValue: string = '';
    public chips: string[] = [];
    public values: string[] | undefined;

    public onKeyDown(event: KeyboardEvent) {
        // console.log('doc', document.querySelector('.p-element'));
        // if ((event.key === ' ') && this.inputValue.trim()) {
        //     console.log('called');
        //     event.preventDefault();
        //     const element = event.target as HTMLElement;
        //     element.blur();
        //     element.focus();
        // }
        // if ((event.key === ' ' || event.key === 'Tab') && this.inputValue.trim()) {
        //     event.preventDefault();
        //     const element = event.target as HTMLElement;
        //     element.blur();
        //     element.focus();
        //     // this.addChip(this.inputValue.trim());
        //     // this.inputValue = '';
        // }
    }

    public addChip(value: string) {
        if (value && !this.chips.includes(value)) {
            this.chips.push(value);
        }
    }

    public removeChip(chip: string) {
        this.chips = this.chips.filter(c => c !== chip);
    }

    public validateHashtags() {

    }
}
