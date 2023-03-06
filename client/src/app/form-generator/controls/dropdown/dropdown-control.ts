import { ControlBase } from "../control-base";

export interface DropdownControl extends ControlBase {
  options?: {key: string, value: string}[];
}
