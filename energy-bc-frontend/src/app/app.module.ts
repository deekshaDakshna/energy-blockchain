import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {ApiService} from "./api.service";
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { ChainComponent } from './chain/chain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTransactionComponent,
    DialogComponent,
    PendingTransactionsComponent,
    ChainComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
