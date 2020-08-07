import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatAccordion} from "@angular/material/expansion";
import {BcDialog} from "../dialog/bc-dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  pendingTransactionsList;

  getPendingTransactions() {
    this.apiService.getPendingTransactions().subscribe(data => {
      this.pendingTransactionsList = data
    })
  }

  mineBlock() {
    this.apiService.mineBlock().subscribe(data => {
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
    this.getPendingTransactions();
  }

}
