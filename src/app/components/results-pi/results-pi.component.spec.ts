import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPiComponent } from './results-pi.component';

describe('ResultsPiComponent', () => {
  let component: ResultsPiComponent;
  let fixture: ComponentFixture<ResultsPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
