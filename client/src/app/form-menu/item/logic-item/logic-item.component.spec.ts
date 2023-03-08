import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicItemComponent } from './logic-item.component';

describe('LogicItemComponent', () => {
  let component: LogicItemComponent;
  let fixture: ComponentFixture<LogicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
