import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
    message: string;
    option: number;
}
@Component({
    selector: 'Diamessage',
    templateUrl: 'Diamessage.html',
    styleUrls: ['Dialog.css']
})

export class Diamessage {

    constructor(
        public dialogRef: MatDialogRef<Diamessage>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close(false);
    }
}