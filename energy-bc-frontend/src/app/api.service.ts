import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getChain() {
    return this.http.get(environment.API_URL + environment.CHAIN);
  }

  addTransaction(new_transaction) {
    // const body_values = {'from': 'Sid', 'to': 'deeksha', 'amount': 50}
    return this.http.post(environment.API_URL + environment.ADD_TRANSACTION, new_transaction);
  }

  getPendingTransactions() {
    return this.http.get(environment.API_URL + environment.PENDING_TRANSACTION);
  }

  mineBlock() {
    return this.http.get(environment.API_URL + environment.MINE_BLOCK);
  }

  checkChainValidity() {
    return this.http.get(environment.API_URL + environment.CHECK_CHAIN_VALIDITY);
  }
}
