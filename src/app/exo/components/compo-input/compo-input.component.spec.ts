import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoInputComponent } from './compo-input.component';

describe('CompoInputComponent', () => {
  let component: CompoInputComponent;
  let fixture: ComponentFixture<CompoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
