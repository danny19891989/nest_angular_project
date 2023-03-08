import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSelectionService {
  fieldSelected = new EventEmitter<string>();

  constructor() { }
}
