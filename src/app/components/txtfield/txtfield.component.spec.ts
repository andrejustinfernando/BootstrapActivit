import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtfieldComponent } from './txtfield.component';

describe('TxtfieldComponent', () => {
  let component: TxtfieldComponent;
  let fixture: ComponentFixture<TxtfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
