import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPowerComponent } from './results-power.component';

describe('ResultsPowerComponent', () => {
  let component: ResultsPowerComponent;
  let fixture: ComponentFixture<ResultsPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
