import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AddTransactionComponent } from "./add-transaction/add-transaction.component";
import { PendingTransactionsComponent } from "./pending-transactions/pending-transactions.component";
import { ChainComponent } from "./chain/chain.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'pending-transaction', component: PendingTransactionsComponent },
  { path: 'chain', component: ChainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
