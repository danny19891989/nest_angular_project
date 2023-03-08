import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  
  itemList = [
    'Display',
    'Data',
    'Validation',
    'API',
    'Conditional',
    'Logic',
    'Layout',
  ];
  currentItem = this.itemList[0];

  public form = this.fb.group({});

  constructor(private fb: FormBuilder) {}

}
