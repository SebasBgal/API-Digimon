import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiTableComponent } from './digi-table.component';

describe('DigiTableComponent', () => {
  let component: DigiTableComponent;
  let fixture: ComponentFixture<DigiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
