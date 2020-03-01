import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Audit } from '../../../model/Audit';
import { AuditService } from '../../../service/audit.service';
import { Client } from 'src/app/model/Client';
import { ServiceService } from 'src/app/service/service.service';
import { AuditRequest } from 'src/app/model/AuditRequest';


@Component({
  selector: 'app-audit-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AuditAddComponent implements OnInit {

  auditForm: FormGroup;
  clients: Client[];
  audit: Audit = new Audit();
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private clientService: ServiceService, private service: AuditService, private router: Router) { }

  ngOnInit() {
    this.audit.client = null;
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    });

    this.auditForm = this.formBuilder.group({
      client: ['', Validators.required],
      card: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.maxLength(12)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  get f() { return this.auditForm.controls; }

  save(audit: Audit) {

    let auditRequest: AuditRequest = new AuditRequest();
    auditRequest.clientId = this.auditForm.get('client').value.id;
    auditRequest.cardNumber = this.auditForm.get('card').value.number;
    auditRequest.amount = this.auditForm.get('amount').value;
    auditRequest.description = this.auditForm.get('description').value;

    this.service.createAudit(auditRequest)
    .subscribe(data => {
      alert('Se agrego conExito...!!!');
      this.router.navigate(['audit-list']);
    });
  }

}
