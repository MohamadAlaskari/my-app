import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbodyTrComponent } from './tbody-tr.component';

describe('TbodyTrComponent', () => {
  let component: TbodyTrComponent;
  let fixture: ComponentFixture<TbodyTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbodyTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbodyTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
