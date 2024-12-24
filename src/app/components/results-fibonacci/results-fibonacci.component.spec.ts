import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFibonacciComponent } from './results-fibonacci.component';

describe('ResultsFibonacciComponent', () => {
  let component: ResultsFibonacciComponent;
  let fixture: ComponentFixture<ResultsFibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsFibonacciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
