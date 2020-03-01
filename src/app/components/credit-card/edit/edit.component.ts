import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from '../../../model/CreditCard';
import { CreditCardService } from '../../../service/credit-card.service';
import { Client } from 'src/app/model/Client';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-credit-card-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CreditCardEditComponent implements OnInit {

  clients: Client[];
  creditCard: CreditCard = new CreditCard();
  constructor(private clientService: ServiceService, private service: CreditCardService, private router: Router) { }

  ngOnInit() {
    this.getCreditCardById();
    this.creditCard.client = new Client();
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    });
  }

  getCreditCardById() {
    let id = localStorage.getItem('id');
    this.service.getCreditCardId(+id)
    .subscribe(data => {
      this.creditCard = data;
    });
  }

  save(creditCard: CreditCard) {
    this.service.editCreditCard(this.creditCard)
    .subscribe(data => {
      alert('Se agrego con Exito...!!!');
      this.router.navigate(['credit-card-list']);
    });
  }

}
