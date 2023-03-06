import { Injectable } from '@angular/core';
import { lastValueFrom, map, of } from 'rxjs';
import { ControlBase } from './form-generator/controls/control-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const meta = [
  {
    key: 'country',
    options: [
      { key: 'IN', value: 'India' },
      { key: 'USA', value: 'United States Of America' },
      { key: 'UK', value: 'United Kingdom' },
    ],
    order: 8,
    controlType: 'dropdown',
  },
  {
    controlType: 'label',
    order: 7,
    text: 'Country',
  },
  {
    controlType: 'label',
    order: 1,
    text: 'First Name',
  },
  {
    controlType: 'textInput',
    key: 'firstName',
    required: true,
    order: 2,
  },
  {
    controlType: 'label',
    order: 3,
    text: 'Last Name',
  },
  {
    controlType: 'textInput',
    key: 'lastName',
    required: true,
    order: 4,
  },
  {
    controlType: 'textInput',
    key: 'emailAddress',
    label: 'Email',
    order: 6,
  },
  {
    controlType: 'label',
    order: 5,
    text: 'Email Address',
  },
  {
    controlType: 'checkbox',
    key: 'resident',
    label: "I'm a resident",
    order: 9,
  },
];

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor() {}

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      of(meta).pipe(
        map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
      )
    );
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }
}
