import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.component.html',
  styleUrls: ['edit-dialog.component.css'],
})
export class EditDialogComponent {
  editedItem: string;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: string }
  ) {
    this.editedItem = data.item;
  }

  saveItem() {
    if (this.editedItem) {
      this.dialogRef.close(this.editedItem);
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}
