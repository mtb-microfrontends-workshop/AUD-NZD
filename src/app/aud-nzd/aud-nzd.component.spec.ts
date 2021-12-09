import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudNzdComponent } from './aud-nzd.component';

describe('AudNzdComponent', () => {
  let component: AudNzdComponent;
  let fixture: ComponentFixture<AudNzdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudNzdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudNzdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
