import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Audit } from '../model/Audit';
import { AuditRequest } from '../model/AuditRequest';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/audits';

  getAudits() {
    return this.http.get<Audit[]>(this.url);
  }

  createAudit(audit: AuditRequest) {
    return this.http.post<AuditRequest>(this.url, audit);
  }

  getAuditId(id: number) {
    return this.http.get<Audit>(this.url + '/' + id);
  }

  editAudit(audit: Audit) {
    return this.http.put<Audit>(this.url + '/' + audit.id, audit);
  }

  deleteAudit(audit: Audit) {
    return this.http.delete<Audit>(this.url + '/' + audit.id);
  }
}
