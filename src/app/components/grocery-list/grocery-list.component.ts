import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'GroceryList',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
})
export class groceryListComponent implements OnInit {
  inputValue: string = '';
  submittedValues: string[] = [];
  selectedItem: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  handleSubmit() {
    if (this.inputValue.trim() != '') {
      this.submittedValues.push(this.inputValue);
      this.inputValue = '';
    }
  }

  clearItems() {
    this.submittedValues.length = 0;
  }

  deleteItem(index: number) {
    this.submittedValues.splice(index, 1);
  }

  editItem(item: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { item: item },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        const itemIndex = this.submittedValues.indexOf(item);
        this.submittedValues[itemIndex] = result;
        this.selectedItem = '';
      }
    });
  }

  saveItem() {
    this.selectedItem = '';
  }
}
