import { Component, Input } from '@angular/core';
import { LabelControl } from './label-control';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() meta!: LabelControl;

  ngOnInit() {
    console.log(this.meta);
    
  }
}
