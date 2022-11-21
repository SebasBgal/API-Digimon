import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiDetailComponent } from './digi-detail.component';

describe('DigiDetailComponent', () => {
  let component: DigiDetailComponent;
  let fixture: ComponentFixture<DigiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
