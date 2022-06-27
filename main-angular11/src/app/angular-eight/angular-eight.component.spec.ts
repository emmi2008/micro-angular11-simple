import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEightComponent } from './angular-eight.component';

describe('AngularEightComponent', () => {
  let component: AngularEightComponent;
  let fixture: ComponentFixture<AngularEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
