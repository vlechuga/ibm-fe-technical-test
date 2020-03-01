import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibm-fe-technical-test';

  constructor(private router: Router) {
  }

  list() {
    this.router.navigate(['client-list']);
  }

  add() {
    this.router.navigate(['client-add']);
  }
}
