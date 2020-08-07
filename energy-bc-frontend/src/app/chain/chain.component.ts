import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss']
})
export class ChainComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  blockChain;

  getChain() {
    this.apiService.getChain().subscribe(data => {
      this.blockChain = data;
    })
  }

  isValidChain() {
    this.apiService.checkChainValidity().subscribe(data => {
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
    this.getChain();
  }

}
