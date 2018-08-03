import { Component , OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'new-campaign-dialog',
    templateUrl: './new-campaign-dialog.component.html',
    styleUrls: ['./new-campaign-dialog.component.css']
})
export class NewCampaignDialogComponent implements OnInit {

    form: FormGroup;
    description: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<NewCampaignDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {data}) {

        this.description = data.description;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, Validators.required],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
