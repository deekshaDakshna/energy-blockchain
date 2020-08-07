import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  addTransactionFormGroup: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.createAddTransactionForm();
  }

  createAddTransactionForm() {
    this.addTransactionFormGroup = this.formBuilder.group({
      'transaction_id': [null, [Validators.required]],
      'customer_id': [null, [Validators.required]],
      'installer_id': [null, [Validators.required]],
      'units_transferred': [null, [Validators.required]],
      'ownership_status': [null, [Validators.required]],
      'origin_country': [null, [Validators.required]],
    });

    this.addTransactionFormGroup.controls['transaction_id'].disable();
  }

  onClickSubmit(addTransactionData) {
    this.apiService.addTransaction(addTransactionData).subscribe(data => {
      this.openDialog(data);
    })
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data
    });
  }


  ngOnInit(): void {
  }
}
