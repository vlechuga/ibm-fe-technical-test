import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from '../../../model/CreditCard';
import { CreditCardService } from '../../../service/credit-card.service';
import { Client } from '../../../model/Client';
import { ServiceService } from '../../../service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  clients: Client[];
  creditCard: CreditCard = new CreditCard();

  constructor(private clientService: ServiceService, private service: CreditCardService, private router: Router) { }

  ngOnInit() {
    this.creditCard.client = new Client();
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    });
  }

  save(creditCard: CreditCard) {
    console.log(JSON.stringify(creditCard));
    this.service.createCreditCard(this.creditCard)
    .subscribe(data => {
      alert('Se agrego conExito...!!!');
      this.router.navigate(['credit-card-list']);
    });
  }

}
