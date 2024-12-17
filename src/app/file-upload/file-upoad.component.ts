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
    selector: 'file-upload',
    templateUrl: './file-upoad.component.html',
    standalone: true,
    imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, HttpClientModule, ToastModule, CommonModule],
    styleUrls: ['./file-upoad.component.scss'],
    providers: [MessageService]
})

export class FileUploadComponent {
    @ViewChild('fileUpload') fileUpload!: FileUpload | any;


    files = [];
    totalSize: number = 0;
    totalSizePercent: number = 0;

    constructor(private config: PrimeNGConfig, private messageService: MessageService) { }

    uploadedFile: any = null;  // Store the single uploaded file

    onSelectedFile(event: any) {
        // Store the selected file with an initial progress of 0
        const file = event.files[0];
        this.uploadedFile = {
            name: file.name,
            progress: 0,
            file: file
        };
        console.log('this.uploadedFile', this.uploadedFile);
    }

    choose(event: any, callback: any) {
        callback();
    }

    triggerFileUpload() {
        this.fileUpload.basicFileInput.nativeElement.click();
    }

    onSelect(event: any) {
        console.log('Selected files:', event.files);
        // Handle the file selection logic here
    }

    onRemoveTemplatingFile(event: any, file: any, removeFileCallback: any, index: any) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear: any) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event: any) {
        this.files = event.currentFiles;
        this.files.forEach((file: any) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    // uploadEvent(callback: any) {
    //     callback();
    // }

    removeUploadedFileCallback(index: any) {

    }

    formatSize(bytes: any) {
        const k = 1024;
        const dm = 3;
        const sizes: any = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }

    onUpload(event: any) {
        console.log('Uploaded files:', event.files);
    }

    uploadEvent(uploadCallback: any) {
        console.log('this.uploadedFile', this.uploadedFile);
        // Simulate file upload progress for the single file
        const interval = setInterval(() => {
            if (this.uploadedFile && this.uploadedFile.progress < 100) {
                this.uploadedFile.progress += 10;  // Simulate progress increment
            } else {
                clearInterval(interval);  // Clear the interval when upload is complete
            }
        }, 500);
    
        uploadCallback();  // Trigger upload action
    }
    deleteFile() {
        console.log('i');
    }
}