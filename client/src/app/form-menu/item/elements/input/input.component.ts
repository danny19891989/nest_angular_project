import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputType = '';
  @Input() label = '';
  @Input() discription = '';
  @Input() required = false;
  guideTipShown = false;

  toggleGuideTip() {
    this.guideTipShown = !this.guideTipShown;
  }
}
