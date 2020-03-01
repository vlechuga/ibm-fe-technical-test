import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adviser } from '../../../model/Adviser';
import { AdviserService } from '../../../service/adviser.service';

@Component({
  selector: 'app-adviser-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class AdviserEditComponent implements OnInit {

  adviser: Adviser = new Adviser();
  constructor(private service: AdviserService, private router: Router) { }

  ngOnInit() {
    this.getAdviserById();
  }

  getAdviserById() {
    let id = localStorage.getItem('id');
    this.service.getAdviserId(+id)
    .subscribe(data => {
      this.adviser = data;
    });
  }

  save(adviser: Adviser) {
    this.service.editAdviser(this.adviser)
    .subscribe(data => {
      alert('Se actualizo con Exito...!!!');
      this.router.navigate(['adviser-list']);
    });
  }

}
