import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
@Input() meta!: DropdownControl;
@Input() form!: FormGroup;

}
