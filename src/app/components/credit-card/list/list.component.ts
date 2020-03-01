import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CreditCard } from '../../../model/CreditCard';
import { CreditCardService } from '../../../service/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CreditCardListComponent implements OnInit {

  creditCards: CreditCard[];
  constructor(private service: CreditCardService, private router: Router) { }

  ngOnInit() {
    this.service.getCreditCards().subscribe(data => {
      this.creditCards = data;
    });
  }

  add() {
    this.router.navigate(['credit-card-add']);
  }

  edit(creditCard: CreditCard): void {
    localStorage.setItem('id', creditCard.id.toString());
    this.router.navigate(['credit-card-edit']);
  }

  delete(creditCard: CreditCard) {
    this.service.deleteCreditCard(creditCard)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.creditCards = this.creditCards.filter(p => p !== creditCard);
      alert("CreditCard deleted...");
    });
  }
}
