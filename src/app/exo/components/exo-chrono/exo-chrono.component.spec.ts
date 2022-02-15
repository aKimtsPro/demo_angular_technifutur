import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoChronoComponent } from './exo-chrono.component';

describe('ExoChronoComponent', () => {
  let component: ExoChronoComponent;
  let fixture: ComponentFixture<ExoChronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoChronoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
