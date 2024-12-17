import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';

@Component({
    selector: 'multivalue-progress-bar',
    templateUrl: './multivalue.component.html',
    standalone: true,
    imports: [ProgressBarModule, CommonModule, SidebarModule, ButtonModule],
    styleUrls: ['./multivalue.component.scss']
})
export class MultiValueProgressBar {

    public positivePercentage: number = 33.33;
    public neutralPercentage: number = 33.33;
    public negativePercentage: number = 33.33;

    public sidebarVisible2: boolean = false;
}
