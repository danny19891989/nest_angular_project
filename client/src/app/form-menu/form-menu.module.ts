import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DisplayItemComponent } from './item/display-item/display-item.component';
import { DataItemComponent } from './item/data-item/data-item.component';
import { ValidationItemComponent } from './item/validation-item/validation-item.component';
import { ApiItemComponent } from './item/api-item/api-item.component';
import { ConditionalItemComponent } from './item/conditional-item/conditional-item.component';
import { LogicItemComponent } from './item/logic-item/logic-item.component';
import { LayoutItemComponent } from './item/layout-item/layout-item.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './item/elements/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemComponent, MenuComponent, DisplayItemComponent, DataItemComponent, ValidationItemComponent, ApiItemComponent, ConditionalItemComponent, LogicItemComponent, LayoutItemComponent, InputComponent],
  exports: [MenuComponent, ItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormMenuModule {}
