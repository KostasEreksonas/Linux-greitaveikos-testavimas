import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMlpComponent } from './results-mlp.component';

describe('ResultsMlpComponent', () => {
  let component: ResultsMlpComponent;
  let fixture: ComponentFixture<ResultsMlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsMlpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsMlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
