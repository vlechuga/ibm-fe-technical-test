import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CreditCard } from '../model/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/credit-cards';

  getCreditCards() {
    return this.http.get<CreditCard[]>(this.url);
  }

  createCreditCard(creditCard: CreditCard) {
    return this.http.post<CreditCard>(this.url, creditCard);
  }

  getCreditCardId(id: number) {
    return this.http.get<CreditCard>(this.url + '/' + id);
  }

  editCreditCard(creditCard: CreditCard) {
    return this.http.put<CreditCard>(this.url + '/' + creditCard.id, creditCard);
  }

  deleteCreditCard(creditCard: CreditCard) {
    return this.http.delete<CreditCard>(this.url + '/' + creditCard.id);
  }
}
