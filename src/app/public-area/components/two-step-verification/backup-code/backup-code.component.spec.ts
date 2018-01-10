import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupCodeComponent } from './backup-code.component';

describe('BackupCodeComponent', () => {
  let component: BackupCodeComponent;
  let fixture: ComponentFixture<BackupCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
