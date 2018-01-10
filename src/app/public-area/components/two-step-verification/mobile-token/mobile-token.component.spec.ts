import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTokenComponent } from './mobile-token.component';

describe('MobileTokenComponent', () => {
  let component: MobileTokenComponent;
  let fixture: ComponentFixture<MobileTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
