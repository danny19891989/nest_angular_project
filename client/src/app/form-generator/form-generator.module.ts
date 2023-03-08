import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { FormGeneratorRoutingModule } from './form-generator-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { SelectComponent } from './controls/select/select.component';
import { FormComponent } from './form/form.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { LabelComponent } from './controls/label/label.component';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [
    DynamicFormComponent,
    TextInputComponent,
    SelectComponent,
    FormComponent,
    DropdownComponent,
    CheckboxComponent,
    LabelComponent,
    ControlComponent,
  ],
  exports: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGeneratorRoutingModule
  ]
})
export class FormGeneratorModule { }
