import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCodeComponent } from './sms-code.component';

describe('SmsCodeComponent', () => {
  let component: SmsCodeComponent;
  let fixture: ComponentFixture<SmsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
