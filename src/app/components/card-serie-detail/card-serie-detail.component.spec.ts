import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSerieDetailComponent } from './card-serie-detail.component';

describe('CardSerieDetailComponent', () => {
  let component: CardSerieDetailComponent;
  let fixture: ComponentFixture<CardSerieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSerieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
