import { Component, OnInit } from '@angular/core';
import { FormSelectionService } from './form-selection.service';

@Component({
  selector: 'app-form-selection',
  templateUrl: './form-selection.component.html',
  styleUrls: ['./form-selection.component.css'],
})
export class FormSelectionComponent implements OnInit {
  constructor(private formSelectionService: FormSelectionService) {}

  menuIsOpen = true;
  fieldSelected = '';

  ngOnInit() {
    this.formSelectionService.fieldSelected.subscribe((field: string) => {
      this.fieldSelected = field;
    });
  }

  newText() {
    this.menuIsOpen = true;
    this.formSelectionService.fieldSelected.emit('text');
  }

  newCheckbox() {
    this.menuIsOpen = true;
    this.formSelectionService.fieldSelected.emit('checkbox');
  }

  newDropdown() {
    this.menuIsOpen = true;
    this.formSelectionService.fieldSelected.emit('dropdown');
  }
}
