import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamlatsComponent } from './hamlats.component';

describe('HamlatsComponent', () => {
  let component: HamlatsComponent;
  let fixture: ComponentFixture<HamlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
