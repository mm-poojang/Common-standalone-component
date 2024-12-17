import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'download-pdf',
    templateUrl: './download-pdf.component.html',
    standalone: true,
    imports: [ProgressBarModule, CommonModule, DropdownModule, CardModule, FormsModule, ReactiveFormsModule, CalendarModule],
    styleUrls: ['./download-pdf.component.scss']
})
export class DownloadComponent {
    constructor() { }

    public selectedDate: Date = new Date();
    public selectedTime: Date = new Date();

    public timezones: any[] = [
        { label: 'GMT', value: 'GMT' },
        { label: 'UTC', value: 'UTC' },
        { label: 'CST', value: 'CST' },
        { label: 'EST', value: 'EST' }
    ];

    public selectedTimezone: string = 'UTC';

    public downloadPdf(): void {
        const cardElement = document.getElementById('card-content');

        html2canvas(cardElement!).then((canvas: any) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgWidth = 210;
            const pageHeight = 297;

            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('result.pdf');
        });
    }

}