import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEnfantDeuxComponent } from './exo-enfant-deux.component';

describe('ExoEnfantDeuxComponent', () => {
  let component: ExoEnfantDeuxComponent;
  let fixture: ComponentFixture<ExoEnfantDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoEnfantDeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoEnfantDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
