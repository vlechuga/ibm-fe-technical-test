import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Audit } from '../../../model/Audit';
import { AuditService } from '../../../service/audit.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AuditListComponent implements OnInit {

  audits: Audit[];
  constructor(private service: AuditService, private router: Router) { }

  ngOnInit() {
    this.service.getAudits().subscribe(data => {
      this.audits = data;
    });
  }

  add() {
    this.router.navigate(['audit-add']);
  }

  edit(audit: Audit): void {
    localStorage.setItem('id', audit.id.toString());
    this.router.navigate(['audit-edit']);
  }

  delete(audit: Audit) {
    this.service.deleteAudit(audit)
    .subscribe(data => {
      this.audits = this.audits.filter(p => p !== audit);
      alert("Audit deleted...");
    });
  }
}
