import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const data = {
  "country": "US",
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "test@test.com",
  "resident": "false"
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getData() {
    return of(data);
  }
}
