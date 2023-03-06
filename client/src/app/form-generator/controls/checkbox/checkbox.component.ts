import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() meta!: CheckboxControl;
  @Input() form!: FormGroup;
}
