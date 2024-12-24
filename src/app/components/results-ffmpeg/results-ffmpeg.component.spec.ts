import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFfmpegComponent } from './results-ffmpeg.component';

describe('ResultsFfmpegComponent', () => {
  let component: ResultsFfmpegComponent;
  let fixture: ComponentFixture<ResultsFfmpegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsFfmpegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsFfmpegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
