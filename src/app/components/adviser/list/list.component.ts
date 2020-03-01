import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Adviser } from '../../../model/Adviser';
import { AdviserService } from '../../../service/adviser.service';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdviserListComponent implements OnInit {

  advisers: Adviser[];
  constructor(private service: AdviserService, private router: Router) { }

  ngOnInit() {
    this.service.getAdviser().subscribe(data => {
      this.advisers = data;
    });
  }

  add() {
    this.router.navigate(['adviser-add']);
  }

  edit(adviser: Adviser): void {
    localStorage.setItem('id', adviser.id.toString());
    this.router.navigate(['adviser-edit']);
  }

  delete(adviser: Adviser) {
    this.service.deleteAdviser(adviser)
    .subscribe(data => {
      this.advisers = this.advisers.filter(p => p !== adviser);
      alert('Adviser deleted...');
    });
  }
}
