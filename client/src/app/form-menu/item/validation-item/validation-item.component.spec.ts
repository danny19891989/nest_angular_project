import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationItemComponent } from './validation-item.component';

describe('ValidationItemComponent', () => {
  let component: ValidationItemComponent;
  let fixture: ComponentFixture<ValidationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
