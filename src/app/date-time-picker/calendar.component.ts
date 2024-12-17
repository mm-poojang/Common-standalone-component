import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'calendar-view',
    templateUrl: './calendar.component.html',
    standalone: true,
    imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, HttpClientModule, ToastModule, CommonModule, DropdownModule, CalendarModule, FormsModule, ReactiveFormsModule],
    styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent {
    selectedDate: Date = new Date();  // The date selected in the calendar
    selectedMonth: number = new Date().getMonth();  // Default to current month
    selectedYear: number = new Date().getFullYear();  // Default to current year
  
    monthOptions: { label: string, value: number }[];  // Dropdown options for months
    yearOptions: { label: string, value: number }[];   // Dropdown options for years
  
    constructor() {
      // Initialize month options
      this.monthOptions = [
        { label: 'January', value: 0 },
        { label: 'February', value: 1 },
        { label: 'March', value: 2 },
        { label: 'April', value: 3 },
        { label: 'May', value: 4 },
        { label: 'June', value: 5 },
        { label: 'July', value: 6 },
        { label: 'August', value: 7 },
        { label: 'September', value: 8 },
        { label: 'October', value: 9 },
        { label: 'November', value: 10 },
        { label: 'December', value: 11 }
      ];
  
      // Initialize year options (range from currentYear - 10 to currentYear + 10)
      const currentYear = new Date().getFullYear();
      this.yearOptions = [];
      for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        this.yearOptions.push({ label: i.toString(), value: i });
      }
    }
  
    /**
     * Resets the datepicker to the current month and year.
     */
    reset(): void {
      this.selectedDate = new Date();
      this.selectedMonth = this.selectedDate.getMonth();
      this.selectedYear = this.selectedDate.getFullYear();
    }
  
    /**
     * Handles the "Done" button click, finalizing the selected date.
     */
    done(): void {
      // Here, you can handle the logic when the "Done" button is clicked.
      // For example, you can emit the selectedDate to parent components or do something with it.
      console.log('Selected Date:', this.selectedDate);
      alert('Selected Date: ' + this.selectedDate);
    }
  
    /**
     * Called when the user selects a new month or year.
     */
    updateCalendar(): void {
      // Update the selectedDate based on the selected month and year.
      const updatedDate = new Date(this.selectedYear, this.selectedMonth, this.selectedDate.getDate());
      this.selectedDate = updatedDate;
    }
}
