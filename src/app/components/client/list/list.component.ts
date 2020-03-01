import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Client } from '../../../model/Client';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Client[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getClient().subscribe(data => {
      this.clients = data;
    });
  }

  add() {
    this.router.navigate(['client-add']);
  }

  edit(client: Client): void {
    localStorage.setItem('id', client.id.toString());
    this.router.navigate(['client-edit']);
  }

  delete(client: Client) {
    this.service.deleteClient(client)
    .subscribe(data => {
      this.clients = this.clients.filter(p => p !== client);
      alert("Client deleted...");
    }, (error) => {console.log(error); } );
  }
}
