import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/clients';

  getClient() {
    return this.http.get<Client[]>(this.url);
  }

  createClient(client: Client) {
    return this.http.post<Client>(this.url, client);
  }

  getClientId(id: number) {
    return this.http.get<Client>(this.url + "/" + id);
  }

  editClient(client: Client) {
    return this.http.put<Client>(this.url + "/" + client.id, client);
  }

  deleteClient(client: Client) {
    return this.http.delete<Client>(this.url + "/" + client.id);
  }
}
