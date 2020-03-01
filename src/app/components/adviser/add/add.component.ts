import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adviser } from '../../../model/Adviser';
import { AdviserService } from '../../../service/adviser.service';


@Component({
  selector: 'app-adviser-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AdviserAddComponent implements OnInit {

  adviser: Adviser = new Adviser();
  constructor(private service: AdviserService, private router: Router) { }

  ngOnInit() {
  }

  save(adviser: Adviser) {
    this.service.createAdviser(this.adviser)
    .subscribe(data => {
      alert('Se agrego con Exito...!!!');
      this.router.navigate(['adviser-list']);
    });
  }

}
