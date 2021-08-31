import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextremeFormComponent } from './devextreme-form.component';

describe('DevextremeFormComponent', () => {
  let component: DevextremeFormComponent;
  let fixture: ComponentFixture<DevextremeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevextremeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevextremeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
