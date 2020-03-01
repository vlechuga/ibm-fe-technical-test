import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../model/Client';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  client: Client = new Client();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getClienteById();
  }

  getClienteById() {
    let id = localStorage.getItem("id");
    this.service.getClientId(+id)
    .subscribe(data => {
      this.client = data;
    });
  }

  save(client: Client) {
    this.service.editClient(this.client)
    .subscribe(data => {
      alert('Se agrego con Exito...!!!');
      this.router.navigate(['client-list']);
    });
  }

}
