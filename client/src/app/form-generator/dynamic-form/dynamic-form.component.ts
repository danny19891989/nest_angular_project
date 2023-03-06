import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MetaService } from '../../meta.service';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {

  @Input() meta: ControlBase[] = [];
  @Input() data: any = {}
  form!: FormGroup;
  payload = '';

  constructor(private metaService: MetaService) {}

  ngOnChanges() {
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}
