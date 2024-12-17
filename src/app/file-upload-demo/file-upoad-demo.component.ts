import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'file-upload-demo',
    templateUrl: './file-upoad-demo.component.html',
    standalone: true,
    imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, HttpClientModule, ToastModule, CommonModule],
    styleUrls: ['./file-upoad-demo.component.scss'],
    providers: [MessageService]
})

export class FileUploadDemoComponent {

    uploadedFile: any;
    uploadProgress: number = 0;
    dragover: boolean = false;

    onFileSelect(event: any) {
        this.uploadedFile = event.files[0];
        this.uploadFile(this.uploadedFile); // Automatically trigger upload
    }

    onUpload(event: any) {
        const file = event.files[0];
        this.uploadFile(file);
    }

    uploadFile(file: any) {
        const formData = new FormData();
        formData.append('file', file);

        // Simulate a file upload process (replace this with actual upload logic)
        const fakeUpload = setInterval(() => {
            this.uploadProgress += 10;
            if (this.uploadProgress >= 100) {
                this.uploadProgress = 100; // Cap at 100%
                clearInterval(fakeUpload);
            }
        }, 200);
    }

    deleteFile() {
        this.uploadedFile = null;
        this.uploadProgress = 0;
    }

    onClear() {
        this.uploadedFile = null;
        this.uploadProgress = 0;
    }

    onDragOver() {
        this.dragover = true;
    }

    onDragLeave() {
        this.dragover = false;
    }

    onDrop() {
        this.dragover = false;
    }
}