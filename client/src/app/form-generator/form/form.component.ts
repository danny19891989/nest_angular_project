import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../data.service';
import { MetaService } from '../../meta.service';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  meta!: ControlBase[];
  data!: any;

  async ngOnInit() {
    this.refresh()
  }

  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as ControlBase[];
  }

  constructor(
    private metaService: MetaService,
    private dataService: DataService
  ) {}

}
