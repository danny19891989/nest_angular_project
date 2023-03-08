import { Component, Input } from '@angular/core';
import { FormSelectionService } from '../../form-selection/form-selection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  constructor(private formSelectionService: FormSelectionService) {}

  @Input() item = '';
  fieldSelected = '';

  ngOnInit() {
    this.formSelectionService.fieldSelected.subscribe((field: string) => {
      this.fieldSelected = field;
    });
  }

  itemClass(name: string) {
    if (this.item === name) {
      return 'active-item';
    }
    return 'hidden-item';
  }
}
