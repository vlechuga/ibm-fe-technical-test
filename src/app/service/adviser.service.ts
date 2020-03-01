import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Adviser } from '../model/Adviser';

@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/advisers';

  getAdviser() {
    return this.http.get<Adviser[]>(this.url);
  }

  createAdviser(adviser: Adviser) {
    return this.http.post<Adviser>(this.url, adviser);
  }

  getAdviserId(id: number) {
    return this.http.get<Adviser>(this.url + '/' + id);
  }

  editAdviser(adviser: Adviser) {
    return this.http.put<Adviser>(this.url + '/' + adviser.id, adviser);
  }

  deleteAdviser(adviser: Adviser) {
    return this.http.delete<Adviser>(this.url + '/' + adviser.id);
  }
}

