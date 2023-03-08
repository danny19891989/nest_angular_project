import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalItemComponent } from './conditional-item.component';

describe('ConditionalItemComponent', () => {
  let component: ConditionalItemComponent;
  let fixture: ComponentFixture<ConditionalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
