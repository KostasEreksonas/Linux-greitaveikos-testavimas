import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOpensslComponent } from './results-openssl.component';

describe('ResultsOpensslComponent', () => {
  let component: ResultsOpensslComponent;
  let fixture: ComponentFixture<ResultsOpensslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsOpensslComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsOpensslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
