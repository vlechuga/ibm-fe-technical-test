import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../model/Client';
import { ServiceService } from '../../../service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  client: Client = new Client();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  save(client: Client) {
    this.service.createClient(this.client)
    .subscribe(data => {
      alert('Se agrego conExito...!!!');
      this.router.navigate(['client-list']);
    });
  }

}
